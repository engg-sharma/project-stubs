// import some style here
import {MdTerrain} from "react-icons/md"
import {TiWeatherSnow} from "react-icons/ti"
import {FaCalendarAlt} from "react-icons/fa"
import {PropTypes} from "react"

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + "%");
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal);
}

// here we are creating a component using a function
// this is stateless functional components
// stateless functional components are function that take in property info and return JSX elements
// stateless functional components cant access "this", so properties are passed directly into the function
export const SkiDayCount = ({total=70, powder=20, backcountry=10, goal=100}) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
                <FaCalendarAlt />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
                <TiWeatherSnow />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
                <MdTerrain />
            <span>day</span>
        </div>
        <div>
            <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
);

SkiDayCount.propTypes = {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}

// DEFAULT VALUES
// use this method to give default properties for ES6 class declaration type syntax
// this syntax also works for stateless function type syntax
// default values can also be defined while passing property and assigning some value
// SkiDayCount.defaultProps = {
//     total: 50,
//     powder: 10,
//     backcountry: 15,
//     goal: 75
// }
// for createclass type syntax use getDefaultProps function inside the createClass
// createClass({
//  getDefaultProps(){
//      return {total: 50, powder: 50, backcountry: 15, goal: 100}
// }
// })

// PROPTYPES
// for createClass type of syntax
// propTypes: {
//  total: PropTypes.number.isRequired,
//  powder: PropTypes.number,
//  backcountry: PropTypes.number
// }
// for ES6 syntax class sype syntax
// SkiDayCount.PropTypes = {
//     total: PropTypes.number.isRequired,
//     powder: PropTypes.number,
//     backcountry: PropTypes.number,
// }
// also have to import PropTypes
// import {PropTypes} from "react"
// for stateless function syntax
// import PropTypes
// and everything is same as ES6 way
