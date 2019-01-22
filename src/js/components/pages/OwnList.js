import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios/index";

import {setHistoryActivities, setNewActivity, removeActivity} from "../../actions/activities";
import { showToastMsg } from "../../actions/toast";

import ActivitiesList from "../common/layout/ActivitiesList"
import ActivitiesForm from "../common/layout/ActivitiesForm"

class OwnList extends Component{

  componentDidMount(){
    try {
      const json = localStorage.getItem('activities'),
        activities = JSON.parse(json);
      if(activities && activities.length){
        this.props.setHistoryActivities(activities);
      }
    }catch (e) {
      //error handling
    }
  };


  componentDidUpdate(prevProps, prevState){
    if(prevProps.activities.length !== this.props.activities.length){
      const json = JSON.stringify(this.props.activities);
      localStorage.setItem('activities', json);
    }
  };

  onBtnClickHandler = (url) => {
    const that = this;

    axios
      .get(url)
      .then((response) => {
        if(!response.data.error) {
          that.props.setNewActivity(response.data);
          that.props.showToastMsg("a new event add", "success", "get_activities");
        }else{
          that.props.showToastMsg(response.data.error, "error", "get_activities");
        }
      })
      .catch((error) => {
        console.log(error)
      })
  };

  onActivityRemoveHandler = (activityId) =>{
    const that = this;
    that.props.removeActivity(activityId);
  };

  render(){
    const activities = this.props.activities;
    // console.log(activities);

    return (
      <div className={"create-list-page page-content"}>
        <div className={"content-container"}>

          <ActivitiesForm sendRequest={this.onBtnClickHandler}/>

          {
            (!activities || !activities.length) &&
            <div className={"content-block"}>
              Lets create your Bucket List.
            </div>
          }

          {
            activities.length > 0 &&
            <ActivitiesList
              activities={activities}
              removeHandler={this.onActivityRemoveHandler}
            />
          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activities: state.activities
});

const mapDispatchToProps = (dispatch) => ({
  setNewActivity: (activity) => dispatch(setNewActivity(activity)),
  setHistoryActivities: (activities) => dispatch(setHistoryActivities(activities)),
  removeActivity: (activityId) => dispatch(removeActivity(activityId)),
  showToastMsg: (text, msgType, id, options) => dispatch(showToastMsg(text, msgType, id, options))
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnList);
