import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "../components/common/header";
import Main from "../containers/index";
import About from "../components/about/index";
import Video from "../components/about/video";
import Text from "../components/about/text";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Lifecycle from "../components/lifecycle";
import Table from "../components/tab/table";
import Temperature from "../components/temperature";

class FirstRouter extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/main" component={Main} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/video" component={Video} />
                        <Route exact path="/text" component={Text} />
                        <Route exact path="/lifecycle" component={Lifecycle} />
                        <Route exact path="/table" component={Table} />
                        <Route exact path="/temperature" component={Temperature} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default FirstRouter;