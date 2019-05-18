import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.getUserInfo = this.getUserInfo.bind(this);
    }
    getUserInfo() {
        console.log(this.props, "getUserInfo props")
        this.props.getUserInfo()
    }
    render() {
        console.log(this.props, "this is user props")
        return (
            <div>
                <p>{this.props.user.email}</p>
                <Button onClick={this.getUserInfo}>get userInfo</Button>
            </div>
        )
    }
}

export default Btn;