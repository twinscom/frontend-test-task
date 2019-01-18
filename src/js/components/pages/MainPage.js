import React, {Component} from 'react';

import OurAdvantages from "../common/layout/OurAdvantages";
import MainBanner from "../common/layout/MainBanner";
import NavLink from "react-router-dom/es/NavLink";

export default function MainPage(props){
  return (
    <div className={"home-page"}>

      <MainBanner/>

      <div className={"helpers m40-0"}>
        <div className={"content-container"}>
          <p className={"main-subtitle"}>A bucket list, also called a life list, is a list of things you want to experience or accomplish before you die. We all have some idea about the things we want to do in life, but compiling them into a concrete list can be crucial in making them a reality. After editing your list, you’ll be ready to start checking off some items!</p>
        </div>
      </div>

      <div className={"our-advantages"}>
        <div className={"content-container"}>
          <OurAdvantages />
        </div>
      </div>

      <div className={"get-started"}>
        <div className={"content-container"}>
          <NavLink to={"/own_list"} className={"get-link"}>Get Started</NavLink>
        </div>
      </div>
    </div>
  );
}