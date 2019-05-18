import React, { Component } from "react";
import InputItem from "../temperature/input-item";
import Panduan from "../temperature/panduan";

function tryNumber(number, type) {
    const input = parseFloat(number);
    if (Number.isNaN(input)) {
        return '';
    }
    if(type == "s") {
        return number * 9 / 5 + 32;
    } else {
        return (number - 32) * 5 / 9;
    }
}
class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            scale: "s"
        }
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(num, type) {
        this.setState({
            number: num,
            scale: type
        })
    }
    render() {
        const { scale, number } = this.state;
        let sheshi = scale == "s" ? number : tryNumber(number, scale);
        let huashi = scale == "h" ? number : tryNumber(number, scale);
        return (
            <div>
                Temperature
                <InputItem scale="s" number={sheshi} inputChange={this.inputChange} />
                <InputItem scale="h" number={huashi} inputChange={this.inputChange} />
                <Panduan number={sheshi} />
            </div>
        )
    }
}

export default Temperature;