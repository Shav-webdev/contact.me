import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/containers/app/App";
import { Provider } from "react-redux";
import "./i18n";
import store from "./redux/store/store";

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
