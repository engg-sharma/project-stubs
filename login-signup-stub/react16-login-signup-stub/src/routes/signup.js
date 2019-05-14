import {Component} from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import FormHelperText from "@material-ui/core/FormHelperText"
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom"
import "isomorphic-fetch"
import {post_pattern_1} from "../static/ajaxOptions"
import history from "../static/history"
import {responseCheck} from "../static/checks"

export class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
        }
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
        if (!event.target.value) {
            this.setState({emailError: "Invalid Password"});
        } else {
            this.setState({emailError: ""});
        }
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
        if (!event.target.value) {
            this.setState({passwordError: "Invalid Password"});
        } else {
            this.setState({passwordError: ""});
        }
    }

    onSignup(event) {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            let obj = JSON.parse(post_pattern_1);
            obj.body = JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
            fetch(_BASE_URL + "users/signup", obj)
                .then(responseCheck)
                .then(body => {
                    console.log(body);
                    history.push("home");
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }

    render() {
        return (
            <Grid container direction="column" alignItems="center" justify="center">
                <form className="display-contents">
                    <Grid item><Typography variant="h4">Hyphen</Typography></Grid>
                    <Grid item><Typography variant="body1">Signup</Typography></Grid>
                    <Grid item>
                        <FormControl aria-describedby="component-error-text-email" error={(this.state.emailError)?true:false}>
                            <InputLabel htmlFor="component-error-email">Email</InputLabel>
                            <Input id="component-error-email" inputRef={val=>this.setState({email: val})} onChange={this.onEmailChange.bind(this)} />
                            <FormHelperText error id="component-error-text-email">{this.state.emailError}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl aria-describedby="component-error-text-password" error={(this.state.passwordError)?true:false}>
                            <InputLabel htmlFor="component-error-password">Password</InputLabel>
                            <Input id="component-error-password" type="password" inputRef={val=>this.setState({password: val})} onChange={this.onPasswordChange.bind(this)} />
                            <FormHelperText error id="component-error-text-password">{this.state.passwordError}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item><Button type="submit" variant="contained" color="secondary" onClick={this.onSignup.bind(this)}>Signup</Button>
                    </Grid>
                    <Grid item>
                        <Typography><Link to="/login">Have a account? Login!</Link></Typography>
                    </Grid>
                </form>
            </Grid>
        )
    }
}
