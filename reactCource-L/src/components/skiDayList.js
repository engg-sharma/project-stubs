import {MdTerrain} from "react-icons/md"
import {TiWeatherSnow} from "react-icons/ti"
import {FaCalendarAlt} from "react-icons/fa"
import {SkiDayRow} from "./skiDayRow"
import {PropTypes} from "react"
import {Link} from "react-router"

export const SkiDayList = ({days, filter}) => {
    const filteredDays = (!filter ||
    !filter.match(/powder|backcountry/))?
    days:
    days.filter(day => day[filter])
    return (
        <div className="ski-day-list">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Resort</th>
                        <th>Powder</th>
                        <th>Backcountry</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link to="/list-days">
                                All Days
                            </Link>
                            <Link to="/list-days/powder">
                                Powder Days
                            </Link>
                            <Link to="/list-days/backcountry">
                                Backcountry Days
                            </Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {filteredDays.map((day, i) =>
                        // <SkiDayRow key={i} resort={day.resort} date={day.date} powder={day.powder} backcountry={day.backcountry}/>
                        <SkiDayRow key={i} {...day}/> // take any keys that are part of that object and make them accessible
                    )}
                </tbody>
            </table>
        </div>
    )
}

SkiDayList.propTypes = {
    // days: PropTypes.array
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error(
                "SkiDayList should ne an array"
            )
        }else if(!props.days.length){
            return new Error(
                "SkiDayList must have at least one record"
            )
        }else{
            return null;
        }
    }
}
