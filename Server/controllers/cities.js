const db = require('../database')
const abstractQueries = require('../abstract_scripts')


exports.city_all = (req, res) => {
    const sql = 'SELECT c.city_name,  c.state FROM city c'
    db.query(sql, (err, rows, fields) =>{
        if(err) console.log(err)
        else if (rows.length === 0){
            res.status(401).send({
                success: 'false'
            })
        } else {
            let map = new Map()
            rows.map(obj =>{
                if(map.has(obj.state)){
                    let items = map.get(obj.state)
                    items.push(obj.city_name)
                    map.set(obj.state, items)
                } else {
                    map.set(obj.state, [obj.city_name])
                }
            })
           res.status(200).send({
               success:'true',
               data: JSON.stringify([...map])
           })
        }
    })
}

/**
 * Checks to see if a given city already esists in the database.
 * If it does then the object sent back is false otherwise the object sent back is true.
 */
exports.city_check = (req, res) => {
    console.log(req.body)
    const array = [req.body]
    const query = abstractQueries.createQueries(array)
    console.log(query)

    db.query(query[0], (err, rows, fields) => {
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
            res.status(200).send({
                success: 'true',
                info: rows
            })
        }
    })
}