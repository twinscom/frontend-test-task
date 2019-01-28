import './../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();
const jsx = (
  <StoreContext.Provider value={store}>
    <AppRouter />
  </StoreContext.Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
