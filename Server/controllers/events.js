const db = require('../database')

exports.upcomming_events = (req, res) => {
    sql = 'SELECT e.event_title, e.start_time, e.end_time, e.description, o.first_name, o.last_name, l.name FROM events e JOIN employee o ON e.host_id = o.employee_id JOIN location l ON l.location_id = e.location_id WHERE e.start_time > curdate() ORDER BY e.start_time ASC LIMIT 5'

    db.query(sql, (err, rows, fields) => {
        if(err) console.log(err)
        else if(rows.length === 0) {
            res.status(401).send({
                success: 'false'
            })
        }
        else{
            res.status(200).send({
                success: 'ture',
                message: rows
            })
        }
    })
}
