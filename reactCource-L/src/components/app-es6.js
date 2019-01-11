import {Component} from "react"
import {SkiDayList} from "./skiDayList"
import {SkiDayCount} from "./skiDayCount"
import {AddDayForm} from "./addDayForm-jsx"
import {Menu} from "./menu"

export class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            allSkiDays: [
                {
                    resort: "Squaw Valley",
                    date: "1-2-2016",
                    powder: true,
                    backcountry: false
                },
                // {
                //     resort: "KirKwood",
                //     date: new Date("3/28/2016"),
                //     powder: false,
                //     backcountry: false
                // },
                // {
                //     resort: "Mt. Tallac",
                //     date: new Date("4/2/2016"),
                //     powder: false,
                //     backcountry: true
                // }
            ]
        }
        this.addDay = this.addDay.bind(this);
    }

    addDay(newDay){
        console.log(newDay);
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        })
    }

    countDays(filter){
        const {allSkiDays} = this.state;
        return allSkiDays.filter(
            (day) => (filter)?day[filter]:day
        ).length;
    }

    render(){
        return (
            <div className="app">
                <Menu />
                {
                    (this.props.location.pathname === "/")?
                    <SkiDayCount total={this.countDays()} powder={this.countDays("powder")} backcountry={this.countDays("backcountry")}/>
                    :(this.props.location.pathname === "/add-day")?
                    <AddDayForm onNewDay={this.addDay}/>:
                    <SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>
                }
            </div>
        )
    }
}
