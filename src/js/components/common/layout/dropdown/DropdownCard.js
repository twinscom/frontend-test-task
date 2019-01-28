import React, { useState, useEffect } from "react";

import DropdownCardItem from "./DropdownCardItem";

export default function DropdownCard({ value, onDropdownChangeHandler, dropdownArrItems}){

    const [showMenu, setShowMenu] = useState(false);
    const [_value, setValue] = useState(value);

    let dropdownMenu;

    useEffect(() => {
        if(!_value && dropdownArrItems){
            setValue(dropdownArrItems[0])
        }

        document.addEventListener("click", closeMenu);
        document.addEventListener("scroll", closeMenu);

        return () => {
          document.removeEventListener("click", closeMenu);
          document.removeEventListener("scroll", closeMenu);
        }
    });


    function onShowBtnClickHandler(e){
        e.preventDefault();
        setShowMenu(true);
        document.addEventListener("click", closeMenu);
        document.addEventListener("scroll", closeMenu);
    }

    function closeMenu(e){
        if (!e || dropdownMenu && !dropdownMenu.contains(e.target)) {
            setShowMenu(false);
            document.removeEventListener("click", closeMenu);
            document.removeEventListener("scroll", closeMenu);
        }
    }

    function onClickHandler(e, item){
        if(_value !== item){
            setValue(item)
        }

        if(onDropdownChangeHandler){
            onDropdownChangeHandler(item.value);
        }
        closeMenu();
    }


    return (
        <div className={"dropdown-wrap"}>
            <button onClick={onShowBtnClickHandler} className={"btn dropdown-btn"}>
                <span className={"dropdown-value-name"}>{_value.name}</span>
                <span className="caret"/>
            </button>
            {
                showMenu &&
                <div className="dropdown-menu"
                    ref={(element) => {
                        dropdownMenu = element;
                    }}>

                    {
                        dropdownArrItems.map((item, index) => {
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