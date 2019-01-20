import React from "react";

export default function DropdownCardItem(props){
    return (
        <div className={"dropdown-item"}
             onClick={() => props.onClickHandler(props.item)}>
            { props.item.name }
        </div>
    )
}