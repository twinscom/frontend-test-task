import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import activitiesReducer from "../reducers/activities";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      activities: activitiesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
