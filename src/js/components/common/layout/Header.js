import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


export default function Header(props){

  const [ isOpen, setIsOpen ] = useState(false);
  const small = useMedia("(max-width: 767px)");

  useEffect(() => {
    const content = document.querySelector('.page-content');

    if(content){

      if(isOpen && small){
        setTimeout(() => {
          content.style.display = "none"
        }, 1000);
      }else{
        content.style.display = "block";
      }

    }
  });

  function onMenuClickHandler(){
    setIsOpen(!isOpen);
  };

  function onLinkClickHandler(){
    setIsOpen(false);
  };

  return (
    <header className={"header " + (small ? "mobile" : "")}>
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

function useMedia(query){
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);

  }, [query]);

  return matches;
}
