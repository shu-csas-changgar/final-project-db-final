const db = require('./database')

/**
 * Constructs a insert query based on the object array given. The array is created in reverse order so the the later queries are the first to be exectued.
 * @param  {[Object]} objArray : An array of objects. Each object in the array is turned into its own query. each object array needs the following keys:
 * - table: the table that the query is accessing
 * - where: the condition that the update is used on. The where key's value [MUST] be an obj
 * @return An array of sql queries.
 */
exports.updateQuery = (objArray) => {
    let sqlQueries = []
    objArray.map( obj =>{
        let table = 'Update '
        let values = 'SET '
        let identifier = ` WHERE `

        Object.keys(obj).forEach( key => {
            if(key === 'table'){
                table += `${obj[key]} `
            }
            else if(key === 'where') {
                Object.keys(obj[key]).forEach( key2 => {
                    identifier += `${key2} = ${db.escape(obj[key][key2])}`
                })
            }
            else {
                values += `${key} = ${db.escape(obj[key])}, `
            }
        })
        var newValues = values.substring(0, values.length -2)
        const sql = table + newValues + identifier
        sqlQueries.unshift(sql)     
    })
    return sqlQueries
}
    