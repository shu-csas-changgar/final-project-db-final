const db = require('../database')
const abstractQueries = require('../abstract_scripts')

exports.inventory_all = (req, res) => {
    //select all inventory items
    const sql = 'SELECT e.equiptment_id, e.serial_number, t.model_name, e.employee_id, em.first_name, em.last_name  FROM equipment e JOIN equipment_type t on e.type_id = t.type_id join employee em  on em.employee_id = e.employee_id'

    db.query(sql, (err, rows, fields)=> {
        if(err) console.log(err)
        else if(rows.length === 0){
            console.log(rows)
            res.status(400).send({
                success: 'false'
            })
            }else{
                res.status(200).send({
                    success:'true',
                    info: rows
                })
            }
        
    })
}

exports.inventory_company = (req, res) =>{
    const sql = 'SELECT t.model_name, e.serial_number, c.category, e.equiptment_id FROM equipment e JOIN equipment_type t ON t.type_id = e.type_id JOIN category c ON t.category_id = c.category_id WHERE e.employee_id  IS NULL ORDER BY c.category_id ASC'

    db.query(sql, (err, rows, fields)=>{
        if(err) console.log(err)
        else if(rows.length === 0){
            console.log(rows)
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

exports.inventory_delete = ( req, res ) => {
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



