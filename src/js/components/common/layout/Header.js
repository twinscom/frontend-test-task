import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useMappedState } from "redux-react-hook";
import { setMenuState } from "../../../actions/app";

const mapState = (state) => ({
  _app: state.app
});

export default function Header(){

  const { _app } = useMappedState(mapState);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ small, setSmall ] = useState(_app.mediaSize === "mobile");

  const dispatch = useDispatch();
  const _setMenuState = useCallback((menuIsOpen) => dispatch(setMenuState(menuIsOpen)));

  useEffect(() => {
    const isSmall = _app.mediaSize === "mobile";
    setSmall(isSmall);

    if(!isSmall){
      _setMenuState(false);
      setIsOpen(false)
    }else{
      setTimeout(() => {
        _setMenuState(isOpen);
      }, (isOpen ? 700 : 300))
    }
  }, [_app.mediaSize, _app.menuIsOpen, isOpen]);

  function onMenuClickHandler(){
    setIsOpen(!isOpen);
  }

  function onLinkClickHandler(){
    setIsOpen(false);
  }

  return (
    <header className={"header " + _app.mediaSize}>
      <div className="content-container">
        <div className="header-content">

          {
            !small ?
              <div className={"left-side"}>
                <NavLink to={"/main"} className={"menu-item"}>Home</NavLink>
                <NavLink to={"/own_list"} className={"menu-item"}>Own list</NavLink>
              </div>
              :
              <div className={"left-side"}>
                <span onClick={onMenuClickHandler} className={"icon " + (isOpen ? "close-white" : "menu-icon")}/>
              </div>
          }

          <div className={"right-side"}>
            <NavLink onClick={onLinkClickHandler} className={"header-logo icon " + (small ? "logo-mob" : "logo")} to="/"/>
          </div>
        </div>

        {
          small &&
          <div className={"mobile-content" + (isOpen ? " menu-open" : "")}>
            <div className={"content-container"}>
              <ul className={"menu"}>
                <li className={"menu-item"}><NavLink onClick={onLinkClickHandler} to={"/main"}>Home</NavLink></li>
                <li className={"menu-item"}><NavLink onClick={onLinkClickHandler} to={"/own_list"}>Own list</NavLink></li>
              </ul>

              <div className={"mt-20"}>
                <a target={"_blank"} href={"#"} className={"app-icon playstore"}/>
              </div>
              <div className={""}>
                <a target={"_blank"} href={"#"} className={"app-icon appstore"}/>
              </div>
            </div>
          </div>
        }
      </div>
    </header>
  );
}