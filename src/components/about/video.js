import React, { Component } from "react";

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.tick();
        }, 1000)
    }
    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }
    componentWillUnmount() {
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div>
                this is a video
                <div>{this.state.date}</div>
            </div>
        )
    }
}

export default Video;