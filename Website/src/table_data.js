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
    },
    {
          
            tableName: "Employee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            tableName: "Vendor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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
        ,
        {
            tableName: "Country",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.",
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