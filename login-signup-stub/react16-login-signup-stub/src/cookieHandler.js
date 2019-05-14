import history from "./static/history"

class CookieHandler {
    getCookieByName(cname) {
        var _cookies = document.cookie.split("; ");
        var cookies = [];

        var length_0 = _cookies.length;
        for(let i = 0; i < length_0; i++) {
            if(_cookies[i] === "" || _cookies[i] === " "){
                continue;
            }
            cookies.push(_cookies[i]);
        }

        var length_0 = cookies.length;
        for (let i = 0; i < length_0; i++) {
            let cookie = cookies[i].split("=");
            let cookieName = cookie[0].trim();
            let cookieValue = "";
            if (cookie[1]) {
                cookieValue = cookie[1].trim();
            }

            if (cname === cookieName) {
                return {key : cookieName, value: cookieValue};
            }
        }
    }

    setCookieByName(cname, cvalue) {
        debugger;
        var _cookies = document.cookie.split("; ");
        var cookies = [];

        var length_0 = _cookies.length;
        for(let i = 0; i < length_0; i++) {
            if(_cookies[i] === "" || _cookies[i] === " "){
                continue;
            }
            cookies.push(_cookies[i]);
        }

        var didSet = false;
        var length_0 = cookies.length;
        for (let i = 0; i < length_0; i++) {
            let cookie = cookies[i].split("=");
            let cookieName = cookie[0].trim();
            let cookieValue = "";
            if (cookie[1]) {
                cookieValue = cookie[1].trim();
            }

            if (cname === cookieName) {
                cookies[i] = cname + "=" + cvalue;
                document.cookie = cookies.join("; ");
                didSet = true;
            }
        }
        if (!didSet) {
            let cookie = cname + "=" + cvalue;
            cookies.push(cookie);
            document.cookie = cookies.join("; ");
        }
    }

    logout() {
        console.log("cookie logout");
        document.cookie = "access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        history.push("login");
    }

    isLoggenIn() {
        let accessToken = this.getCookieByName("access-token");
        if (accessToken) {
            return true;
        } else {
            return false;
        }
    }
}

const cookieHandler = new CookieHandler();
export default cookieHandler;
