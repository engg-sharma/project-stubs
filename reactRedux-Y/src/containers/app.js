import React from "react"
import {connect} from "react-redux"
import {User} from "../components/user"
import {Main} from "../components/main"
import {setName} from "../actions/userActions"

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Main changeUsername={this.props.setName}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

// map state to props means, which properties of the global application state
// do i want to use in this component and then to which local properties in this
// component do i want to map them
const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//# sourceURL=app.js
