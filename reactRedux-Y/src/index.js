import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"

import store from "./store"
import App from "./containers/app"







store.subscribe(() => {
    console.log("Store Updated!", store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById("react-container")
);

//# sourceURL=index.js
