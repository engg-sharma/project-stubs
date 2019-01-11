import {MdTerrain} from "react-icons/md"
import {Component} from "react"

export class Member extends Component{

    // fires right before first initial render
    componentWillMount(){
        this.style={
            backgroundColor: "gray"
        }
    }

    //
    componentWillUpdate(nextProps){
        this.style={
            backgroundColor: (nextProps.admin)?"green":"purple"
        }
    }

    shouldComponentUpdate(nextProps){
        return this.props.admin !== nextProps.admin;
    }

    render() {
        const {name, thumbnail, email, admin, makeAdmin, removeAdmin} = this.props

        return (
            <div className="member" style={this.style}>
                <h1>{name} {(admin)?<MdTerrain/>:null}</h1>
                {
                    (admin)?
                        <a onClick={() => removeAdmin(email)}>Remove Admin</a>
                    :
                        <a onClick={() => makeAdmin(email)}>Make Admin</a>
                }

                <img src={thumbnail} alt="profile picture"/>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        )
    }
}
