

export const setHistoryActivities = (activities) => ({
  type: "SET_HISTORY_ACTIVITIES",
  activities
}),
setNewActivity = (activity) => ({
  type: "SET_NEW_ACTIVITY",
  activity
}),
removeActivity = (activityId) => ({
  type: "REMOVE_ACTIVITY",
  activityId
});