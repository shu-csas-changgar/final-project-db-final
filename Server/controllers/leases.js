const db = require('../database')
const abstractQueries = require('../abstract_scripts')

exports.leases_all = (req, res) =>{
    console.log('made it')

    const sql = 'select e.transaction_id, t.vendor_id, t.cost, t.purchase_date, t.begin_date, t.end_date, v.company_name, eq.model_number from transaction t join equipment e on t.transaction_id = e.transaction_id join vendor v on t.vendor_id = v.vendor_id join equipment_type eq  on e.type_id = eq.type_id'
    
    db.query(sql, (err, rows, fields)=>{

        if(err) console.log(err)
        else if(rows.length === 0){
            res.status(400).send({
                success: 'false'
            })
        }
        else{
            res.status(200).send({
                success: 'true',
                info:rows
            })
        }
    })   
}

exports.leases_create_vendor = (req, res)=> {
    const array = [req.body]
    const query = abstractQueries.createQueries(array)
    console.log(query)

    db.beginTransaction( err => {
        if(err) { throw err }

        db.query(query[0].sql, (err, results, fields) => {
            if(err) {
                return db.rollback( () =>  {
                    res.status(400).send({
                        success: 'false',
                        error: err
                    })
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

exports.leases_form = (req, res)=>{

    const sql =' SELECT vendor_id, company_name FROM vendor ORDER BY company_name ASC'

    console.log("WE are here")
    db.query(sql, (err, rows, fields)=>{

        if(err) console.log(err)
        else if(rows.length === 0){
            res.status(200).send({
                success: 'false'
            })

        }
        
        else{
            console.log(rows)
            res.status(200).send({

                success: 'true',
                info:rows
            })
        }
    })
}

exports.leases_update =(req, res)=>{
    const array = [req.body]
    const query = abstractQueries.createQueries(array)
    console.log(query)

    db.beginTransaction( err => {
        if(err) { throw err }

        db.query(query[0].sql, (err, results, fields) => {
            if(err) {
                return db.rollback( () =>  {
                    res.status(400).send({
                        success: 'false',
                        error: err
                    })
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

exports.lease_delete = (req, res) => {
    const array = [req.body]
    const query = abstractQueries.createQueries(array)

    console.log(query)

    
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