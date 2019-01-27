import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import activitiesReducer from "../reducers/activities";
import toastReducer from "../reducers/toast";
import appReducer from "../reducers/app";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      activities: activitiesReducer,
      toast: toastReducer,
      app: appReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
