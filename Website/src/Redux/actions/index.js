/**
 * This file contains redux actions that will be passed the the redux library to hand the global state
 *      variables of the application.
 */


/**
 * Action for sucessful login
 */
export const success = () => {
    return {
        type: 'LOG_SUCCESS'
    }
}

/**
 * Action for a logout or unsucessful login
 */
export const denied = () => {
    return {
        type: 'LOG_DENIED'
    }
}