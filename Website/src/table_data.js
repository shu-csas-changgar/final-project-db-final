import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

// The FontAwsome checkmark that will be added to the array
const checkmark = <FontAwesomeIcon icon={faCheck} />

export default {
    tables: [{
        tableName: "Inventory",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
        tableName: "Inventory2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
                NN: checkmark ,
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
    }]
}