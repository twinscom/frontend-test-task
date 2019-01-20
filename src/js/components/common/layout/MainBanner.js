import React from "react";
import LazyLoad from "../libs/LazyLoad";

export default function MainBanner(props) {

  return(
    <div className={"banner-wrap"}>
    <LazyLoad>
      <div className={"main-banner"} data-title={"Let's start your list together..."}/>
    </LazyLoad>
    </div>
  )
}