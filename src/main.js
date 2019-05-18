import React, { Component } from "react";
import { render } from "react-dom";
import FirstRouter from "./routers/router";
import "./css/main.css";

import { Provider } from "react-redux";
import store from "./store/store";

console.log(store, "this is a store")
render(
    <FirstRouter store={store} />,
    document.getElementById("root")
)