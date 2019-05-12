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