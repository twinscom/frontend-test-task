

export default (state = {
  length: 0,
  all: [],
}, action) => {
  let activity, activities, length, activityId, all;
  switch (action.type) {

    case "SET_HISTORY_ACTIVITIES":
      activities = action.activities;
      return activities;

    case "SET_NEW_ACTIVITY":
      activity = action.activity;
      all = [...state.all, activity];
      length = all.length;
      return {
        ...state,
        all,
        length
      };

    case "REMOVE_ACTIVITY":
      activityId = action.activityId;
      all = [];
      activities = {
        length: state.length -1,
        all: []
      };
      state.all.forEach((item) => {
        if(item.key !== activityId) {
          activities.all.push(item);
        }
      });
      return activities;


    default:
      return state;
  }
}