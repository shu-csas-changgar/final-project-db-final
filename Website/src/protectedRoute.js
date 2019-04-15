import React from "react"
import { Route, Redirect } from "react-router-dom"

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
            {...rest}
            {...console.log(rest.store.getState().logged)}
            render={props => {
                if(rest.store.getState().logged){
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