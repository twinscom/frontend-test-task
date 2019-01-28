import React from "react";

export default function DropdownCardItem({item, onClickHandler}){
    return (
        <div className={"dropdown-item"}
             onClick={(e) => onClickHandler(e, item)}>
            { item.name }
        </div>
    )
}