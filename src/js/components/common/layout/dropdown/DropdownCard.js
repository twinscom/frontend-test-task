import React, { Component } from "react";

import DropdownCardItem from "./DropdownCardItem";

export default class DropdownCard extends Component{

    state = {
        showMenu: false,
        value: this.props.value
    };

    componentWillMount(){
        if(!this.props.value && this.props["dropdownArrItems"]){
            this.setState({
                value: this.props["dropdownArrItems"][0]
            })
        }
    }

    showBtnHandler = (e) => {
        e.preventDefault();

        this.setState(
            () => {
                return {
                    showMenu: true
                };
            },
            () => {
                document.addEventListener("click", this.closeMenu);
                document.addEventListener("scroll", this.closeMenu);
            }
        )

    };

    closeMenu = (e, target) => {
        const eventTarget = (e ? e.target : target);
        if (this.dropdownMenu && !this.dropdownMenu.contains(eventTarget)) {

            this.setState(
                () => {
                    return {
                        showMenu: false
                    };
                },
                () => {
                    document.removeEventListener("click", this.closeMenu);
                    document.removeEventListener("scroll", this.closeMenu);

                }
            )
        }
    };

    onClickHandler = (item) => {
        if(this.state.value !== item){
            this.setState({
                value: item
            })
        }
        this.closeMenu();

        if(this.props["onDropdownChangeHandler"]){
            this.props["onDropdownChangeHandler"](item.value);
        }
    };

    render(){

        return (
            <div className={"dropdown-wrap"}>
                <button onClick={this.showBtnHandler} className={"btn dropdown-btn"}>
                    <span className={"dropdown-value-name"}>{this.state.value.name}</span>
                    <span className="caret"/>
                </button>
                {
                    this.state.showMenu &&
                    <div className="dropdown-menu"
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}>

                        {
                            this.props["dropdownArrItems"].map((item, index) => {
                                return(
                                    <DropdownCardItem
                                        key={index}
                                        item={item}
                                        onClickHandler={this.onClickHandler}
                                    />
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
};