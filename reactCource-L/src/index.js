import React from "react"
import {render} from "react-dom"
// import {SkiDayCount} from "./components/skiDayCount"
// import {SkiDayList} from "./components/skiDayList"
import {App} from "./components/app-es6"
import {Whoops404} from "./components/whoops404"
import {Router, Route, hashHistory} from "react-router"

import  {MemberList} from "./components/ui/memberList"

window.React = React;

// render(
//     // <SkiDayCount backcountry="asd"/>,
//     // <SkiDayCount total={50} powder={20} backcountry={10} goal={100}/>,
//     // <SkiDayList days={[]} />,
//     // <SkiDayList days={
//     //     [
//     //         {
//     //             resort: "Squaw Valley",
//     //             date: new Date("1/2/2016"),
//     //             powder: true,
//     //             backcountry: false
//     //         },
//     //         {
//     //             resort: "KirKwood",
//     //             date: new Date("3/28/2016"),
//     //             powder: false,
//     //             backcountry: false
//     //         },
//     //         {
//     //             resort: "Mt. Tallac",
//     //             date: new Date("4/2/2016"),
//     //             powder: false,
//     //             backcountry: true
//     //         }
//     //     ]
//     // }/>,
//     // <App />,
//     <Router history={hashHistory}>
//         <Route path="/" component={App}/>
//         <Route path="list-days" component={App}>
//             <Route path=":filter" component={App} />
//         </Route>
//         <Route path="add-day" component={App}/>
//         <Route path="*" component={Whoops404}/>
//     </Router>,
//     document.getElementById("react-container")
// )

render (
    <MemberList />,
        document.getElementById("react-container")
)
