import React, { Component } from "react";

function hoc(WrappedComponent) {
    class Hoc extends React.Component {
        constructor(props) {
            super(props);
            this.refCreate = this.refCreate.bind(this);
        }
        refCreate(ins) {
            console.log(ins, "15155")
            ins ? ins.getName() : "";
        }
        render() {
            return (
                <div>
                    高阶组件的使用
                    <WrappedComponent name="addict" age="19" sex="man" ref={this.refCreate} />
                </div>
            )
        }
    }
    Hoc.displayName = `Hoc(${getdisplayName(WrappedComponent)})`;
    return Hoc;
}

function getdisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default hoc;
