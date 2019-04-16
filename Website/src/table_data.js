import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

// The FontAwsome checkmark that will be added to the array
const checkmark = <FontAwesomeIcon icon={faCheck} />

export default {
    tables: [{
        tableName: "Inventory",
        description: "Table outlining the essential information regarding the id and location of inventory. This table also includes information about the owner of the inventory and the employee's responsible.",
        data: [{
                colName: "inventory_id",
                datatype: "INT",
                key: "PK",
                NN: checkmark,
                UQ: checkmark,
                AI: checkmark
            },
            {
                colName: "location_id",
                datatype: "INT",
                key: "FK",
                NN: null,
                UQ: null,
                AI: null
            },
            {
                colName: "owner_id",
                datatype: "INT",
                key: "FK",
                NN: checkmark,
                UQ: null,
                AI: null
            },
            {
                colName: "equipment_id",
                datatype: "INT",
                key: "FK",
                NN: checkmark,
                UQ: checkmark,
                AI: null
            },
            {
                colName: "employee_id",
                datatype: "INT",
                key: "FK",
                NN: null,
                UQ: null,
                AI: null
            },
            {
                colName: "last_update",
                datatype: "DATETIME",
                key: null,
                NN: checkmark,
                UQ: null,
                AI: checkmark
            }
        ],    
    },
    {
          
            tableName: "Employee",
            description: "This table is responsible for all of the pertinent information regarding an employee such as name and id.",
            data: [{
                    colName: "employee_id",
                    datatype: "INT",
                    key: "PK",
                    NN: checkmark,
                    UQ: checkmark,
                    AI: checkmark
                },
                {
                    colName: "first_name",
                    datatype: "VARCHAR",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_name",
                    datatype: "VARCHAR",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "email",
                    datatype: "VARCHAR",
                    key: "FK",
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "location_id",
                    datatype: "INT",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "account_id",
                    datatype: "INT",
                    key: null,
                    NN: null,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "cell_number",
                    datatype: "INT",
                    key: null,
                    NN: null,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "last_updated",
                    datatype: "TIMESTAMP",
                    key: null,
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                }
                
            ],    
        },
        {
            tableName: "Account",
            description: "This table provides the necessary information for a unique account for the website.",
            data: [{
                    colName: "account_id",
                    datatype: "INT",
                    key: "PK",
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "username",
                    datatype: "VARCHAR",
                    key: "FK",
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "password",
                    datatype: "BINARY",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_updated",
                    datatype: "TIMESTAMP",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                }
            ],    
        },
        {
            tableName: "Location",
            description: "This table highlights the location information of buildings and rooms.",
            data: [{
                    colName: "location_id",
                    datatype: "INT",
                    key: "PK",
                    NN: checkmark,
                    UQ: checkmark,
                    AI: checkmark
                },
                {
                    colName: "building_id",
                    datatype: "INT",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "room_id",
                    datatype: "INT",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_updated",
                    datatype: "TIMESTAMP",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                }
            ],    
        },
        {
            tableName: "Room",
            description: "This table highlights the information necessary to identify a specific room in a building.",
            data: [{
                    colName: "floor",
                    datatype: "INT",
                    key: "PK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "extension",
                    datatype: "SMALLINT",
                    key: "FK",
                    NN: null,
                    UQ: null,
                    AI: null
                }
            ],    
        },
        {
            tableName: "Building",
            description: "This table houses the necessary information for each building owned by the company.",
            data: [{
                    colName: "building_name",
                    datatype: "VARCHAR",
                    key: "PK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "phone_number",
                    datatype: "INT",
                    key: "FK",
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                }
            ],    
        },
        {
            tableName: "Equipment",
            description: "This table provides information regarding the equipment such as its id and serial number, as well the transaction information.",
            data: [{
                    colName: "equipment_id",
                    datatype: "INT",
                    key: "PK",
                    NN: checkmark,
                    UQ: checkmark,
                    AI: checkmark
                },
                {
                    colName: "serial_number",
                    datatype: "VARCHAR",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "transaction_id",
                    datatype: "INT",
                    key: "FK",
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "type_id",
                    datatype: "INT",
                    key: "FK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_updated",
                    datatype: "DATETIME",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                }
            ],    
        },
        {
            tableName: "Equipment Type",
            description: "This table is for all of the information about an equipment's model name and number.",
            data: [{
                    colName: "model_name",
                    datatype: "VARCHAR",
                    key: null,
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "model_number",
                    datatype: "INT",
                    key: null,
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                }
            ],    
        },
        {
            tableName: "Reservations",
            description: "This table is for all of the relevant information for a reservation such as location and start and end times as well as the employees involved.",
            data: [{
                    colName: "location_id",
                    datatype: "INT",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "start_time",
                    datatype: "DATETIME",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "end_time",
                    datatype: "DATETIME",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "employee_id",
                    datatype: "INT",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_updated",
                    datatype: "TIMESTAMP",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                }
            ],    
        },
        {
            tableName: "Equipment Has Reservations",
            description: "This table is responsible for the reservations reservation id.",
            data: [{
                    colName: "reservations_reservation_id",
                    datatype: "INT",
                    key: "PK",
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_updated",
                    datatype: "TIMESTAMP",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
               
            ],    
        },
        {
            tableName: "Transaction",
            description: "This table highlights all of the transaction data such as vendor id, cost of the product and date of purchase.",
            data: [{
                    colName: "vendor_id",
                    datatype: "INT",
                    key: null,
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "Cost",
                    datatype: "DOUBLE",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "purchase_date",
                    datatype: "DATETIME",
                    key: null,
                    NN: null,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_updated",
                    datatype: "TIMESTAMP",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "begin_date",
                    datatype: "DATETIME",
                    key: null,
                    NN: null,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "end_date",
                    datatype: "DATETIME",
                    key: null,
                    NN: null,
                    UQ: null,
                    AI: null
                }
            ],    
        },
        {
            tableName: "Vendor",
            description: "This table stores the data for all of the vendors such as their address.",
            data: [{
                    colName: "address_id",
                    datatype: "INT",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_updated",
                    datatype: "TIMESTAMP",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
            ],    
        },
        {
            tableName: "Address",
            description: "This table stores all of the relevant data used for the address of a location such as city, state, and postal code.",
            data: [{
                    colName: "address2",
                    datatype: "VARCHAR",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "city",
                    datatype: "VARCHAR",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "district",
                    datatype: "VARCHAR",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "postal_code",
                    datatype: "VARCHAR",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "city_id",
                    datatype: "INT",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_update",
                    datatype: "TIMESTAMP",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                }
            ],
        },
        {
            tableName: "City",
            description: "Stores the data used to identify a specific city.",
            data: [{
                    colName: "city_id",
                    datatype: "INT",
                    key: "PK",
                    NN: checkmark,
                    UQ: null,
                    AI: checkmark
                },
                {
                    colName: "city_name",
                    datatype: "VARCHAR",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "last_update",
                    datatype: "TIMESTAMP",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "country_id",
                    datatype: "INT",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                },
                {
                    colName: "state",
                    datatype: "VARCHAR",
                    key: null,
                    NN: null,
                    UQ: null,
                    AI: null
                }
            ],
        },
        {
            tableName: "Country",
            description: "This table has the data for specifying a country.",
            data: [{
                    colName: "country_name",
                    datatype: "VARCHAR",
                    key: null,
                    NN: checkmark,
                    UQ: checkmark,
                    AI: null
                },
                {
                    colName: "last_update",
                    datatype: "TIMESTAMP",
                    key: null,
                    NN: checkmark,
                    UQ: null,
                    AI: null
                }
            ],
        }
    ]
}