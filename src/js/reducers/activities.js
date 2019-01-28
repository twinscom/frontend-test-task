

export default (state = {
  all: [],
}, action) => {
  let activity, activities, activityId, all;
  switch (action.type) {

    case "SET_HISTORY_ACTIVITIES":
      activities = action.activities;
      return activities;

    case "SET_NEW_ACTIVITY":
      activity = action.activity;
      all = [...state.all, activity];
      return {
        ...state,
        all,
      };

    case "REMOVE_ACTIVITY":
      activityId = action.activityId;
      all = state.all.filter((item) => item.key !== activityId);
      activities = {
        ...state,
        all
      };
      return activities;


    default:
      return state;
  }
}