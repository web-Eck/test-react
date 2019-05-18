import React, { Component } from "react";

class InputItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        this.props.inputChange(e.target.value, this.props.scale);
    }
    render() {
        return (
            <div>
                {this.props.scale == "s" ? <span>摄氏度：</span> : <span>华氏度：</span>}
                <input type="text" 
                    scale={this.props.scale}
                    value={this.props.number} 
                    onChange={this.handleInput} 
                />
            </div>
        )
    }
}

export default InputItem;