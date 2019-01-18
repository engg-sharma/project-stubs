import {Component} from "react"
import {Route, Redirect} from "react-router-dom";
import cookieHandler from "../cookieHandler"

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render = {props =>
            (cookieHandler.isLoggenIn())
            ?
            <Component {...props} />
            :
            <Redirect to={{pathname: "/signup", state: {from: props.location}}} />
        }
        />
    )
}

export {PrivateRoute}
