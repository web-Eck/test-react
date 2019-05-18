import React, { Component } from "react";

class Panduan extends React.Component {
    render() {
        return (
            <div>
                { this.props.number >= 100 ? <p>水沸腾了</p> : <p>水没有沸腾了</p> }
            </div>
        )
    }
}

export default Panduan;