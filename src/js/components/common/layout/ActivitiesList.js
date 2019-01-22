import React, { useState, useEffect} from 'react';
import { StickyContainer, Sticky } from "react-sticky";


export default function ActivitiesList(props){

  const [activitiesArr, setActivitiesArr] = useState(props.activities.all);
  const [sortActivity, setSortActivity] = useState("");

  useEffect(() => {
    setActivitiesArr(props.activities.all);
  }, [props]);
  
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
              const _activity = activity;

              return (
                <li key={i} className={"activity-item row"}>
                  <div className={"title "}>{_activity.activity}</div>

                  <div className={"accessibility"}>{_activity["accessibility"]}</div>

                  <div className={"participants"}>{_activity["participants"]}</div>

                  <div className={"price"}>{_activity["price"]}</div>

                  <div className={"type"}>{_activity["type"]}</div>

                  <div className={"options"}>
                    <span className={"remove-icon"} onClick={() => props["removeHandler"](_activity.key)}/>
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

