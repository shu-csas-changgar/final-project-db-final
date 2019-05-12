const db = require('../database')
const abstractQueries = require('../abstract_scripts')

exports.employee_credentials = (req, res) => {
    if(req === null) res.status(400).send({
        success: 'false',
        message: 'Invald argruments'
    })
    else {
        const sql = 'SELECT account_id FROM account WHERE username = ? AND password= ?'
        db.query(sql, [req.body.email, req.body.password], (err, rows, fields) => {
            if(err) console.log('error fetching data: ' + err)
            else if(rows.length === 0){
              console.log("The username or password was incorrect")
              res.status(400).send({
                  success: 'false'
              })
            } 
            else{
              res.status(200).send({
                  success: 'true',
                  info: rows
                })
            }
        })
    }
}

exports.employee_delete = ( req, res ) => {
    const array = [req.body]
    const query = abstractQueries.createQueries(array)
    sql1 = 'SET FOREIGN_KEY_CHECKS=0'
    sql2 = 'SET FOREIGN_KEY_CHECKS=1'

    db.beginTransaction( err => {
        if(err) { throw err }

        db.query(sql1, (err, results, fields) => {
            if(err) {
                console.log(err)

                return db.rollback( () =>  {
                    res.status(400).send({
                        success: 'false',
                        error: err
                    })
                })
            }
            db.query(query[0].sql, (err, results, fields) => { 
                if(err) {
                    console.log(err)
    
                    return db.rollback( () =>  {
                        res.status(400).send({
                            success: 'false',
                            error: err
                        })
                    })
                }
            })
            db.query(sql2, (err, results, fields) => { 
                if(err) {
                    console.log(err)
    
                    return db.rollback( () =>  {
                        res.status(400).send({
                            success: 'false',
                            error: err
                        })
                    })
                }
            })



        })
        db.commit( err => {
            if(err) {
                console.log("here at the other error ------------------")
                return db.rollback( () => {
                    res.status(400).send({
                        success: 'false',
                        error: err
                    })
                })
            }
            console.log("success")
            res.status(200).send({
                success: 'true'
            })
        })
    })
}


exports.employee_equipment = (req, res) => {
    if(req.body.id === null) res.status(400).send({
        success: 'false',
        message: 'Invald argruments'
    })
    else{
        const id = req.body.id.toString()
        const sql = 'SELECT t.model_name, a.address1, e.serial_number, c.category FROM equipment e JOIN equipment_type t ON e.type_id = t.type_id JOIN category c ON c.category_id = t.category_id JOIN location l ON e.location_id = l.location_id JOIN address a ON a.address_id = l.address_id WHERE e.employee_id = ? ORDER BY c.category ASC, t.model_name ASC'
        db.query(sql, [id], (err, rows, fields) =>{
            if(err) console.log(err)
            else{
                res.status(200).send({
                    success: 'true',
                    message: rows
                    })
                }
        })
    }
}

exports.employee_name = (req, res) => {
    if(req.body.id === null) res.status(400).send({
        success: 'false',
        message: 'Invald argruments'
    })
    else {
        const id = req.body.id.toString()
        const sql = 'SELECT first_name, last_name FROM employee WHERE employee_id = ?'
        db.query(sql, [id], (err, rows, fields) =>{
            if(err) console.log(err)
            else{
                res.status(200).send({
                    success: 'true',
                    message: rows
                    })
            }
        })
    }
}

exports.employee_check = (req, res) => {
    const array = [req.body]
    const query = abstractQueries.createQueries(array)


    db.query(query[0], (err, rows, fields)=> {
        if(err){
            console.log(err)
            res.status(200).send({
                success: 'false'
            })
        } else if (rows.length === 0){
            res.status(200).send({
                success: 'false',
                info: rows
            })
        }
        else {
            console.log(rows)
            res.status(200).send({
                success: 'true',
                info: rows
            })
        }
    })
}



exports.employee_address_check = (req, res) => {

    const array = [req.body]
    const query = abstractQueries.createQueries(array)

    db.query(query[0], (err, rows, fields)=> {
        if(err){
            console.log(err)
            res.status(200).send({
                success: 'false'
            })
        } else if (rows.length === 0){
            res.status(200).send({
                success: 'false',
                info: rows
            })
        }
        else {
            console.log(rows)
            res.status(200).send({
                success: 'true',
                info: rows
            })
        }
    })
}

exports.employee_name_check = (req, res) => {
    sql = 'SELECT email FROM employee WHERE employee_email = ?'

    db.query(sql,[req.body], (err, rows, fields)=> {
        if(err) console.log(err)
        else if(rows.length === 0 ){
            console.log(rows)
            res.status(400).send({
                success: 'false'

            })
        } else{
            res.status(200).send({
                success: 'true',
                info: rows
            })
        }
    })

}

exports.employee_all = (req, res) => {
    //Select all employee information
    const sql = 'SELECT e.employee_id, e.first_name, e.last_name, e.email, a.address_id, a.address1, a.address2, a.county, a.postal_code, c.city_id, c.city_name, c.state, co.country_name, e.cell_number FROM employee e JOIN address a ON e.address_id = a.address_id JOIN city c ON c.city_id = a.city_id JOIN country co ON c.country_id = co.country_id'

    db.query(sql, (err, rows, fields)=> {
        if(err) console.log(err)
        else if(rows.length === 0 ){
            console.log(rows)
            res.status(400).send({
                success: 'false'

            })
        } else{
            res.status(200).send({
                success: 'true',
                info: rows
            })
        }
    })
}

exports.employee_update = (req, res) => {
    const array = [req.body]
    const queries = abstractQueries.createQueries(array)
    db.beginTransaction( err => {
        if(err) { throw err }

        db.query(queries[0].sql, (err, results, fields) => {
            if(err) {
                return db.rollback( () =>  {
                    res.status(400).send({
                        success: 'false',
                        error: err
                    })
                })
            }
            let x = results.insertId

            for (let i = 1; i < queries.length; i++) {
                db.query(queries[i].sql, [x], (err , results, fields) => {
                    if(err) {
                        return db.rollback( () => {
                            res.status(400).send({
                                success: 'false',
                                error: err
                            })
                        })
                    }
                    x = results.insertId
                })
            }

            db.commit( err => {
                if(err) {
                    return db.rollback( () => {
                        res.status(400).send({
                            success: 'false',
                            error: err
                        })
                    })
                }
                console.log("success")
                res.status(200).send({
                    success: 'true'
                })
            })
        })
    })
}

exports.allUpdate = (req, res) => {

    const queries = abstractQueries.createQueries(req.body)

    db.beginTransaction( err => {
        if(err) { throw err }

        db.query(queries[0].sql, (err, results, fields) => {
            if(err) {
                return db.rollback( () =>  {
                    res.status(400).send({
                        success: 'false',
                        error: err
                    })
                })
            }
            let x = results.insertId

            db.query(queries[1].sql, [x], (err , results, fields) => {
                if(err) {
                    return db.rollback( () => {
                        res.status(400).send({
                            success: 'false',
                            error: err
                        })
                    })
                }
                x = results.insertId
                db.query(queries[2].sql, [x], (err , results, fields) => {
                    if(err) {
                        return db.rollback( () => {
                            res.status(400).send({
                                success: 'false',
                                error: err
                            })
                        })
                    }                
                })
            })

            db.commit( err => {
                if(err) {
                    return db.rollback( () => {
                        res.status(400).send({
                            success: 'false',
                            error: err
                        })
                    })
                }
                console.log("success")
                res.status(200).send({
                    success: 'true'
                })
            })
        })
    })
}