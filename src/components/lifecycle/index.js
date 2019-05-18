import React, { Component } from 'react';
import { Button } from "antd";
import Count from "./count";

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        console.log("state"); //1、首先打印，初始化state
        this.state = {
            count: 0
        }
        this.clickHandle = this.clickHandle.bind(this);
    }
    componentDidMount() {
        console.log("componentDidMount"); //4、组件渲染完成时执行
    }
    componentWillMount() {
        console.log("componentWillMount"); //2、组件将要装载的时候执行
    }
    componentWillReceiveProps() {
        console.log("willReceiveComponent");
    }
    shouldComponentUpdate(nextProps) {
        console.log("shouldComponentUpdate", nextProps);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
        console.log(nextProps, nextState);
    }
    componentDidUpdate(nextProps, nextState) {
        console.log("componentDidUpdate");
        console.log(nextProps, nextState);
    }
    clickHandle() {
        this.setState((prevState, props) => {
            console.log(prevState, props)
            return { count: prevState.count + 1 }
        }, () => { //会在componentDidUpdate执行完之后触发，可检测是否渲染完成
            console.log(1212)
            console.log(this.state.count, "after")
        })
        console.log(this.state.count, "before")
    }
    render() { 
        console.log("render"); //3、渲染组件时执行
        return (
            <div>
                测试生命周期函数
                <Count count={this.state.count} />
                <Button onClick={this.clickHandle}>点击 + 1</Button>
            </div>
        );
    }
}
 
export default Lifecycle;