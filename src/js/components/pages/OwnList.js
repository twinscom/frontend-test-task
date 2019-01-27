import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios/index";

import { setHistoryActivities, setNewActivity, removeActivity } from "../../actions/activities";
import { showToastMsg } from "../../actions/toast";

import ActivitiesList from "../common/layout/ActivitiesList"
import ActivitiesForm from "../common/layout/ActivitiesForm"
import { useDispatch, useMappedState } from "redux-react-hook";

const mapState = (state) => ({
  activities: state.activities
});

export default function OwnList(){

  const [ history, setHistory ] = useState(false);
  const { activities } = useMappedState(mapState);

  const dispatch = useDispatch();
  const _setNewActivity = useCallback((activity) => dispatch(setNewActivity(activity)));
  const _setHistoryActivities = useCallback((activities) => dispatch(setHistoryActivities(activities)));
  const _removeActivity = useCallback((activityId) => dispatch(removeActivity(activityId)));
  const _showToastMsg = useCallback((text, msgType) => dispatch(showToastMsg(text, msgType)));

  useEffect(() => {
    if(!history){
      try {
        const json = localStorage.getItem('activities'),
          h_activities = JSON.parse(json);
        if(h_activities && h_activities.all.length){
          _setHistoryActivities(h_activities);
        }
      }catch (e) {
        //error handling
      }
      setHistory(true);
    }

    const json = JSON.stringify(activities);
    localStorage.setItem('activities', json);
  }, [activities]);



  function onBtnClickHandler(url){
    axios
      .get(url)
      .then((response) => {
        if(!response.data.error) {
          _setNewActivity(response.data);
          _showToastMsg("a new event was added", "success");
        }else{
          _showToastMsg(response.data.error, "error");
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function onActivityRemoveHandler(activityId){
    _removeActivity(activityId);
  }

  return (
    <div className={"create-list-page page-content"}>
      <div className={"content-container"}>

        <ActivitiesForm sendRequest={onBtnClickHandler}/>

        {
          (!activities || !activities.all.length) &&
          <div className={"content-block"}>
            Lets create your Bucket List.
          </div>
        }

        {
          activities.all.length > 0 &&
          <ActivitiesList
            activities={activities}
            removeHandler={onActivityRemoveHandler}
          />
        }
      </div>
    </div>
  );
}