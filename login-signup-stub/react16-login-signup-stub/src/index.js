import React from "react";
import {render} from "react-dom";
import {Router, Route, Switch} from "react-router-dom";
import history from "./static/history"

import {PrivateRoute} from "./components/privateRoute"
import {PublicRoute} from "./components/publicRoute"
import {Home} from "./routes/home"
import {Login} from "./routes/login"
import {Signup} from "./routes/signup"
import {Whoops404} from "./routes/whoops404"
import "./stylesheets/main.scss"

window.React = React;
window._BASE_URL = "http://localhost:3200/";

render(
    <Router history={history}>
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/signup" component={Signup} />
            <PrivateRoute path="/home" component={Home} />
            <Route component={Whoops404} />
        </Switch>
    </Router>,
    document.getElementById("app-container")
)
