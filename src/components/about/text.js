import React, { Component } from "react";
import Hoc from "../HOC/index";

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.getName = this.getName.bind(this);
    }
    getName() {
        console.log("get name");
    }
    render() {
        let numbers = [1, 2, 3, 4, 5];
        // map遍历数组的每一个元素，调用函数处理每一个值，返回一个新的数组，原数组不会发生改变
        return (
            <div>
                this is a text
                <p onClick={this.getName}>name: {this.props.name}</p>
                <p>age: {this.props.age}</p>
                <p>sex: {this.props.sex}</p>
                <ul>
                    { numbers.map((num, index) => {
                        return <li key={index}>{num}</li>
                    } ) }
                </ul>
            </div>
        )
    }
}

export default Hoc(Text);