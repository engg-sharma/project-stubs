import cookieHandler from "../cookieHandler"

const responseCheck = (response) => {
    // check for unauthorized here with response.status, if failed then logout by unsetting the cookie
    if(response.ok) {
        return response.json();
    } else if (response.status === 401) {
        cookieHandler.logout();
        throw new Error(response.statusText);
    } else {
        throw new Error(response.statusText);
    }
}

export {responseCheck};
