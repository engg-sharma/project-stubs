const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type){
        case "SET_NAME_FULFILLED" :
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE" :
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    return state;
};
export default userReducer;


// doesnt work see
// https://stackoverflow.com/questions/34676984/cannot-export-const-arrow-function

// export default userReducer = (state = {
//     name: "Max",
//     age: 27
// }, action) => {
//     switch (action.type){
//         case "SET_NAME_FULFILLED" :
//             state = {
//                 ...state,
//                 name: action.payload
//             }
//             break;
//         case "SET_AGE" :
//             state = {
//                 ...state,
//                 age: action.payload
//             }
//             break;
//     }
//     return state;
// };
