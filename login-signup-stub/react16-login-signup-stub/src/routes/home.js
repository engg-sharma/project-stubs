import {Component} from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import cookieHandler from "../cookieHandler"

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    onLogout(event) {
        // unset cookie
        cookieHandler.logout();
    }

    render(){
        return (
            <Grid container direction="column" alignItems="center" justify="center">
                <Grid item><Typography variant="h4">Welcome to Hyphen!</Typography></Grid>
                <Grid item><Button variant="contained" color="secondary" onClick={this.onLogout.bind(this)}>Logout</Button>
                </Grid>
            </Grid>
        )
    }
}
