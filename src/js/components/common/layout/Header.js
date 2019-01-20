import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


export default function Header(props){

  return (
    <header className="header">
      <div className="content-container">
        <div className="header-content">
          <div className={"left-side"}>
            <NavLink to={"/main"} className={"menu-item"}>Home</NavLink>
            <NavLink to={"/own_list"} className={"menu-item"}>Own list</NavLink>
          </div>

          <div className={"right-side"}>
            <NavLink className="header-logo" to="/">
              <span className={"icon logo"}/>
              {/*<span className={"icon logo-mob"}/>*/}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
