import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from 'antd';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "main"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({
            current: e.key
        })
    }
    render() {
        return (
            <div className="nav">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="main">
                        <Link to="/main"> Main </Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about"> About </Link>
                    </Menu.Item>
                    <Menu.Item key="video">
                        <Link to="/video"> Video </Link>
                    </Menu.Item>
                    <Menu.Item key="text">
                        <Link to="/text"> Text </Link>
                    </Menu.Item>
                    <Menu.Item key="lifecycle">
                        <Link to="/lifecycle"> Lifecycle </Link>
                    </Menu.Item>
                    <Menu.Item key="temperature">
                        <Link to="/temperature"> Temperature </Link>
                    </Menu.Item>
                    <Menu.Item key="table">
                        <Link to="/table"> Table </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(Header);