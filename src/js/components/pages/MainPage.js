import React, {Component} from 'react';

import OurAdvantages from "../common/layout/OurAdvantages";
import MainBanner from "../common/layout/MainBanner";
import NavLink from "react-router-dom/es/NavLink";

import LazyLoad from "../common/libs/LazyLoad";

export default function MainPage(){
  return (
    <div className={"home-page page-content"}>

      <MainBanner/>

      <div className={"helpers p40-0"}>
        <div className={"content-container"}>
          <span className={"bucket-list"}/>
          <span>A bucket list, also called a life list, is a list of things you want to experience or accomplish before you die. We all have some idea about the things we want to do in life, but compiling them into a concrete list can be crucial in making them a reality. After editing your list, you’ll be ready to start checking off some items!</span>
        </div>
      </div>

      <div className={"our-advantages"}>
        <div className={"content-container"}>
          <OurAdvantages />
        </div>
      </div>

      <LazyLoad>
        <div className={"get-started"}>
          <div className={"content-container"}>
            <NavLink to={"/own_list"} className={"get-link"}>Get Started</NavLink>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
}