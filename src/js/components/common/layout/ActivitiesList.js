import React, { useState, useEffect} from 'react';
import { StickyContainer, Sticky } from "react-sticky";


export default function ActivitiesList({activities, removeHandler}){

  const [activitiesArr, setActivitiesArr] = useState(activities.all); //it's used by handleSortActivities
  const [sortActivity, setSortActivity] = useState("");

  useEffect(() => {
    setActivitiesArr(activities.all);
  }, [activities]);
  
  function handleSortActivities(type) {
    const sortedActivityArr = activitiesArr.sort((a, b) => {
      if (a[type] < b[type]) return -1;
      if (a[type] > b[type]) return 1;
      return 0;
    });
    setActivitiesArr(sortedActivityArr);
    setSortActivity(type)
  }

  return (
    <div className={"activities m20-0"}>

      <StickyContainer>

        <Sticky>
          {({ style, isSticky }) => {

            return (
              <div className={"sticky-table-head" + (isSticky ? " sticky" : "")} style={style}>
                <div className={"list-title row"}>
                  <div className={"title"}>Title</div>

                  <div className={"sorted accessibility " + (sortActivity === "accessibility" ? "active" : "")}
                       onClick={() => handleSortActivities("accessibility")}>Accessibility <span/></div>

                  <div className={"sorted participants " + (sortActivity === "participants" ? "active" : "")}
                       onClick={() => handleSortActivities("participants")}>Participants <span/></div>

                  <div className={"sorted price " + (sortActivity === "price" ? "active" : "")}
                       onClick={() => handleSortActivities("price")}>Price <span/></div>

                  <div className={"type"}
                       onClick={() => handleSortActivities("type")}>Type</div>
                  <div className={"options"}/>
                </div>
              </div>
            );
          }}
        </Sticky>

        <ul className={"activities-list"}>
          {
            activitiesArr.map((activity, i) => {
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

