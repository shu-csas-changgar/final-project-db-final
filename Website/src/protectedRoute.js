import React from "react"
import { Route, Redirect } from "react-router-dom"

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
            {...rest}
            render={props => {
                if(rest.store.getState().logged){
                    return <Component {...props} store={rest.store} />
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