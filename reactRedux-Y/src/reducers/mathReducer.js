const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type){
        case "ADD" :
            state = {
                ...state,
                result : state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT" :
            state = {
                ...state,
                result : state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};
export default mathReducer;

// doesnt work see
// https://stackoverflow.com/questions/34676984/cannot-export-const-arrow-function

// export default mathReducer = (state = {
//     result: 1,
//     lastValues: []
// }, action) => {
//     switch (action.type){
//         case "ADD" :
//             state = {
//                 ...state,
//                 result : state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             }
//             break;
//         case "SUBTRACT" :
//             state = {
//                 ...state,
//                 result : state.result - action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             }
//             break;
//     }
//     return state;
// };
