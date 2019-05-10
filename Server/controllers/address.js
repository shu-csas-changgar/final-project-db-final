const db = require('../database')


exports.address_all = (req, res) => {
    const sql = 'SELECT a.address1, c.city_name, c.state, a.postal_code, a.address_id FROM address a JOIN city c ON a.city_id = c.city_id'
    db.query(sql, (err, rows, fields) => {
        if(err) console.log(err)
        else if(rows.length === 0){
            res.status(401).send({
                success: 'false'
            })
        }
        else {
            res.status(200).send({
                success: 'true',
                info: rows
            })
        }
    })
}