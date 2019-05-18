import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "./index.less";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.PayIncrease = this.PayIncrease.bind(this);
        this.PayDecrease = this.PayDecrease.bind(this);
    }
    PayIncrease() {
        console.log("++++");
        this.props.PayIncrease("test");
    }
    PayDecrease() {
        console.log("----");
        this.props.PayDecrease();
    }
    render() {
        console.log(this.props, "this is main props")
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <p>鬼刀</p>
                        <p>是一部漫画</p>
                        
                    </Col>
                    <Col span={12}>
                        <h2>当月工资为{this.props.count}</h2>
                        <Button onClick={this.PayIncrease}>升职加薪</Button>
                        <Button onClick={this.PayDecrease}>迟到罚款</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Main;