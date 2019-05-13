const db = require('./database')

/**
 * Constructs a insert query based on the object array given. The array is created in reverse order so the the later queries are the first to be exectued.
 * @param  {[Object]} objArray : An array of objects. Each object in the array is turned into its own query. each object array needs the following keys:
 * - table: the table that the query is accessing
 * - where: the condition that the update is used on. The where key's value [MUST] be an obj
 * @return An array of sql queries.
 */
exports.createQueries = (objArray) => {
    let sqlQueries = []
    objArray.map( obj => {
        if(obj.action === 'update') {
            const sql = updateQuery(obj)
            const s = obj.id !== null ? true : false
            const sqlObject = {
                type: 'update',
                dependent: s,
                sql: sql
            }
            sqlQueries.unshift(sqlObject)     
        }
        else if (obj.action === 'insert') {
            const sql = insertQuery(obj)
            const sqlObject = {
                type: 'insert',
                dependent: false,
                sql: sql
            }
            sqlQueries.unshift(sqlObject)
        }
        else if (obj.action === 'select'){
            const sql = selectQuery(obj)
            const sqlObject = {
                type: 'select',
                dependent: false,
                sql: sql
            }
            sqlQueries.unshift(sqlObject)
        }
        else if (obj.action === 'selectId'){
            const sql = selectIdQuery(obj)
            const sqlObject = {
                type: 'select',
                dependent: false,
                sql: sql
            }
            sqlQueries.unshift(sqlObject)
        }
        else if (obj.action === 'delete'){
            const sql = removeE(obj)
            const sqlObject = {
                type: 'select',
                dependent: false,
                sql: sql
            }
            sqlQueries.unshift(sqlObject)
        }
    })
    return sqlQueries
}

function selectQuery(obj){
    let select = 'SELECT '
    let table = 'FROM '
    let where = 'WHERE '

    Object.keys(obj).forEach( key => {
        if (key === 'table') {
            table += `${obj[key]} `
        }
        else if (key !== 'action' && key !== 'id' && key !== 'type') {
            select += `${key}, `
            where += `${key} ${obj[key] === null? 'IS NULL ' : ' =' + db.escape(obj[key])} AND `
        }
    })

    const newSelect = select.substring(0, select.length -2) + " "
    const newWhere = where.substring(0, where.length - 4)
    const sql = newSelect + table + newWhere
    return sql
}

function selectIdQuery(obj){
    let select = 'SELECT '
    let table = 'FROM '
    let where = 'WHERE '

    Object.keys(obj).forEach( key => {
        if (key === 'table') {
            table += `${obj[key]} `
        }
        
        else if(key === 'id'){
            Object.keys(obj[key]).forEach( key2 => {
                where += `${key2} ${obj[key][key2] === null? 'IS NULL ' : ' =' + db.escape(obj[key][key2])} AND `
            })
        }

        else if(key === 'selectId'){
            select += `${obj[key]} `
        }
        else if (key !== 'action' && key !== 'id' && key !== 'type') {
            where += `${key} ${obj[key] === null? 'IS NULL ' : ' =' + db.escape(obj[key])} AND `
        }
    })

    const newWhere = where.substring(0, where.length - 4)
    const sql = select + table + newWhere
    return sql
}



function updateQuery(obj) {
    let table = 'UPDATE '
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
            else if (key === 'id') {
                Object.keys(obj[key]).forEach( key2 => {
                    values += `${key2} = ${obj[key][key2]}, `
                })
            }
            else if(key !== 'action' && key !== 'id') {
                values += `${key} = ${db.escape(obj[key])}, `
            }
        })
    let newValues = values.substring(0, values.length -2)
    const sql = table + newValues + identifier

    return sql
}

function removeE(obj) {
    let table = 'DELETE FROM  '
    let values = `WHERE `

    let iiii = obj.deleteId
    Object.keys(obj).forEach( key => {
        if(key === 'table'){
            table += `${obj[key]} `
        }
        else if (key === 'dataArray') {
            obj[key].map( item => {
                values += `${iiii} = ${db.escape(item)} OR `
            })
        }
    })
    let newValues = values.substring(0, values.length -3)
    const sql = table + newValues
    return sql
}

function insertQuery(obj) {
    let table = 'INSERT INTO '
    let cols  = ' ('
    let values = 'VALUES('
    Object.keys(obj).forEach( key => {
        if(key === 'table') {
            table+= `${obj[key]}`
        }
        else if (key === 'id') {
            Object.keys(obj[key]).forEach( key2 => {
                cols += `${key2}, `
                values += `${obj[key][key2]}, `
            })
        }
        
        else if( key != 'action' && key != 'type' && key !== 'id') {
            cols += `${key}, `
            values += `${db.escape(obj[key])}, `
        }
    })
    let newCols = cols.substring(0, cols.length -2) + ') '
    let newValues = values.substring(0, values.length -2) + ')'
    const sql = table + newCols + newValues
    return sql
}
