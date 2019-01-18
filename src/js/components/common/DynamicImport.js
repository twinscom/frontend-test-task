import React, { Component } from "react";

export default class DynamicImport extends Component{

    state = {
        component: null
    };

    isCancelled = false;

    componentDidMount(){
        this.props.load()
            .then((module) => {
                !this.isCancelled && this.setState(() => ({
                    component: module.default
                }))
            })
            .catch((error) => {
                console.log(error);
                return null; //alert("Component can not be loaded." + error)
            })
    }

    componentWillUnmount() {
        this.isCancelled = true;
    }

    render(){
        return this.props.children(this.state.component);
    }
}