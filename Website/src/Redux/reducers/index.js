/**
 * This file handles the global state of the application. This class is used jointly with redux.
 * This file is needed because to passes values from the login to the rest of the application
 */

/** Global Variables
 * - logged: Boolean value that represents a clients login statue. Initally set to false
 *      since when client starts the user is not logged in
 */
const initialState = {
    logged: false,
    account_id: null
}

/**
 * Handles an action when it is called
 */
export default(state = initialState, action) => {
    switch(action.type){
        case 'LOG_SUCCESS':
            console.log('You are successfuly logged in')
            return Object.assign({}, state, {
                logged: true
            })
        case 'LOG_DENIED':
            console.log('You were denied login')
            return Object.assign({}, state, {
                logged: false
            })

        case 'EMP_UPDATE':
            console.log('Updated employee id ')
            return Object.assign({}, state, {
                account_id: action.id
            })
        default:
            return state
    }
}