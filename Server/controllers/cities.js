const db = require('../database')

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
            /*
            for (var [key, value] of map.entries()) {
                console.log(key + ' = ' + value);
              }
            */
           res.status(200).send({
               success:'true',
               data: JSON.stringify([...map])
           })

           console.log("here")
        }
    })
}