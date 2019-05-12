const db = require('../database')
const abstractQueries = require('../abstract_scripts')

exports.inventory_all = (req, res) => {
    console.log("here")
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
    const sql = 'select * from equipment where equipment_id is null'

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




