import React, { useState, useEffect} from 'react';
import { StickyContainer, Sticky } from "react-sticky";


export default function ActivitiesList({activities, removeHandler}){

  const [sortActivity, setSortActivity] = useState("type");

  function handleSortActivities(type) {
    setSortActivity(type);
  }

  return (
    <div className={"activities m20-0"}>

      <StickyContainer>

        <Sticky>
          {({ style, isSticky }) => {

            return (
              <div className={"sticky-table-head" + (isSticky ? " sticky" : "")} style={style}>
                <div className={"list-title row"}>
                  <div className={"sorted title " + (sortActivity === "title" ? "active" : "")}>Title</div>

                  <div className={"sorted accessibility " + (sortActivity === "accessibility" ? "active" : "")}
                       onClick={() => handleSortActivities("accessibility")}>Accessibility <span/></div>

                  <div className={"sorted participants " + (sortActivity === "participants" ? "active" : "")}
                       onClick={() => handleSortActivities("participants")}>Participants <span/></div>

                  <div className={"sorted price " + (sortActivity === "price" ? "active" : "")}
                       onClick={() => handleSortActivities("price")}>Price <span/></div>

                  <div className={"sorted type " + (sortActivity === "type" ? "active" : "")}
                       onClick={() => handleSortActivities("type")}>Type <span/></div>
                  <div className={"options"}/>
                </div>
              </div>
            );
          }}
        </Sticky>

        <ul className={"activities-list"}>
          {
            activities.all.sort((a, b) => {
              if (a[sortActivity] < b[sortActivity]) return -1;
              if (a[sortActivity] > b[sortActivity]) return 1;
              return 0;
            }).map((activity, i) => {
              return (
                <li key={i} className={"activity-item row"}>
                  <div className={"title "}>{activity.activity}</div>

                  <div className={"accessibility"}>{activity.accessibility}</div>

                  <div className={"participants"}>{activity.participants}</div>

                  <div className={"price"}>{activity.price}</div>

                  <div className={"type"}>{activity.type}</div>

                  <div className={"options"}>
                    <span className={"remove-icon"} onClick={() => removeHandler(activity.key)}/>
                  </div>
                </li>
              )
            })
          }
        </ul>

      </StickyContainer>
    </div>
  );
};

