import React, { useState, useEffect } from "react";

import DropdownCardItem from "./DropdownCardItem";

export default function DropdownCard(props){

    const [showMenu, setShowMenu] = useState(false);
    const [value, setValue] = useState(props.value);

    let dropdownMenu;

    useEffect(() => {
        if(!props.value && props["dropdownArrItems"]){
            setValue(props["dropdownArrItems"][0])
        }

        document.addEventListener("click", closeMenu);
        document.addEventListener("scroll", closeMenu);
    });


    function showBtnHandler(e){
        e.preventDefault();

        setShowMenu(true, () => {
            console.log(setShowMenu);
        });

        document.addEventListener("click", closeMenu);
        document.addEventListener("scroll", closeMenu);
    }

    function closeMenu(e, target){
        const eventTarget = (e ? e.target : target);
        if (dropdownMenu && !dropdownMenu.contains(eventTarget)) {
            setShowMenu(false);
            document.removeEventListener("click", closeMenu);
            document.removeEventListener("scroll", closeMenu);
        }
    }

    function onClickHandler(item){
        if(value !== item){
            setValue(item)
        }

        closeMenu();
        if(props["onDropdownChangeHandler"]){
            props["onDropdownChangeHandler"](item.value);
        }
    }


    return (
        <div className={"dropdown-wrap"}>
            <button onClick={showBtnHandler} className={"btn dropdown-btn"}>
                <span className={"dropdown-value-name"}>{value.name}</span>
                <span className="caret"/>
            </button>
            {
                showMenu &&
                <div className="dropdown-menu"
                    ref={(element) => {
                        dropdownMenu = element;
                    }}>

                    {
                        props["dropdownArrItems"].map((item, index) => {
                            return(
                                <DropdownCardItem
                                    key={index}
                                    item={item}
                                    onClickHandler={onClickHandler}/>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
};