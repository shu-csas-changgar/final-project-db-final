const db = require('../database')


exports.employee_credentials = (req, res) => {
    if(req === null) res.status(401).send({
        success: 'false',
        message: 'Invald argruments'
    })
    else {
        const sql = 'SELECT account_id FROM account WHERE username = ? AND password= ?'
        db.query(sql, [req.body.email, req.body.password], (err, rows, fields) => {
            if(err) console.log('error fetching data: ' + err)
            else if(rows.length === 0){
              console.log("The username or password was incorrect")
              res.status(401).send({
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


exports.employee_equipment = (req, res) => {
    if(req.body.id === null) res.status(401).send({
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
    if(req.body.id === null) res.status(401).send({
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

exports.employee_all = (req, res) =>{
    //Select all employee information
    const sql = 'SELECT e.employee_id, e.first_name, e.last_name, e.email, a.address1, c.city_name, c.state, e.cell_number FROM employee e JOIN address a ON e.address_id = a.address_id JOIN city c ON c.city_id = a.city_id'
    db.query(sql, (err, rows, fields)=> {
        if(err) console.log('errrorrrr')
        else if(rows.length === 0 ){
            console.log(rows)
            res.status(401).send({
                success: 'false'

            })
            }

            else{
                res.status(200).send({
                    success: 'true',
                    info: rows
                })
            }
        }

        
        
    )
    }
