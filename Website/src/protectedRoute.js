import React from "react"
import { Route, Redirect } from "react-router-dom"

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const state = true
    return(
        <Route
            {...rest}
            {...console.log(rest)}
            render={props => {
                if(state){
                    return <Component {...props} />
                }
                else {
                    return(<Redirect to={{
                        pathname: '/'
                    }}
                    />
                    )
                }
            }}
        />
    )
}