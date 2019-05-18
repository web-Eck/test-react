import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../../containers/getUser";
import "./index.less";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="about">
                <p className="about-title">获取Email</p>
                <UserInfo />
            </div>
        )
    }
}

export default About;