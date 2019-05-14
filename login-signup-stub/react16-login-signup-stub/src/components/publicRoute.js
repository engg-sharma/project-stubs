import {Component} from "react"
import {Route, Redirect} from "react-router-dom";
import cookieHandler from "../cookieHandler"

function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render = {props =>
            (!cookieHandler.isLoggenIn())
            ?
            <Component {...props} />
            :
            <Redirect to={{pathname: "/home", state: {from: props.location}}} />
        }
        />
    )
}

export {PublicRoute}
