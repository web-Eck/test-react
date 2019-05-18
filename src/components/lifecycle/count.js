import React, { Component } from "react";

class Count extends React.Component {
    componentWillReceiveProps() {
        console.log("count", "componentWillReceiveProps")
    }
    shouldComponentUpdate() {
        console.log("Count", "shouldComponentUpdate")
        return true;
    }
    componentWillUpdate() {
        console.log("count", "componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("count", "componentDidUpdate")
    }
    render() {
        console.log("count", "render")
        return (
            <p>{ this.props.count }</p>
        )
    }
}

export default Count;