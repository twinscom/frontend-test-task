import React, { useState, useEffect} from 'react';
import { StickyContainer, Sticky } from "react-sticky";


export default function ActivitiesList(props){

  const [activitiesArr, setActivitiesArr] = useState(props.activities.all);

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
  }

  return (
    <div className={"activities m20-0"}>

      <StickyContainer>

        <Sticky>
          {({ style, isSticky }) => {

            return (
              <div className={"sticky-table-head" + (isSticky ? " sticky" : "")} style={style}>
                <div className={"list-title row"}>
                  <div className={"title col-all-4"}>Title</div>

                  <div className={"accessibility col-all-2"}
                       onClick={() => handleSortActivities("accessibility")}>Accessibility</div>

                  <div className={"participants col-all-2"}
                       onClick={() => handleSortActivities("participants")}>Participants</div>

                  <div className={"price col-all-1"}
                       onClick={() => handleSortActivities("price")}>Price</div>

                  <div className={"type col-all-2"}
                       onClick={() => handleSortActivities("type")}>Type</div>
                  <div className={"type col-all-1"}/>
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
                  <div className={"title col-all-4"}>{_activity.activity}</div>

                  <div className={"accessibility col-all-2"}>{_activity["accessibility"]}</div>

                  <div className={"participants col-all-2"}>{_activity["participants"]}</div>

                  <div className={"price col-all-1"}>{_activity["price"]}</div>

                  <div className={"type col-all-2"}>{_activity["type"]}</div>

                  <div className={"options col-all-1"}>
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

