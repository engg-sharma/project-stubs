export function setName(name){
    // return {
    //     type: "SET_NAME",
    //     payload: name
    // }

    // below method requires redux-thunk
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: "SET_NAME",
    //             payload: name
    //         })
    //     }, 2000);
    // }

    // below method requires redux-promise-middleware
    return {
        type: "SET_NAME",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(name);
            },2000);
        })
    }
}

export function setAge(age){
    return {
        type: "SUBTRACT",
        payload: age
    }
}
