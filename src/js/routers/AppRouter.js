import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { ToastContainer, toast } from 'react-toastify';
import Media from 'react-media';
import dynamic from 'next/dynamic'
import DynamicImport from '../components/common/libs/DynamicImport';

import NotFoundPage from '../components/pages/NotFoundPage';

import Header from "../components/common/layout/Header";
import Footer from "../components/common/layout/Footer";

import { resetToastMsg } from "./../actions/toast";
import { useDispatch, useMappedState } from "redux-react-hook";
import { setMediaSize } from "../actions/app";

export const history = createHistory();

const mapState = (state) => ({
  _toast: state.toast,
  _app: state.app
});

export default function AppRouter(){

  const { _toast, _app } = useMappedState(mapState);

  const dispatch = useDispatch();
  const _resetToastMsg = useCallback(() => dispatch(resetToastMsg()));
  const _setMediaSize = useCallback((mediaSize) => dispatch(setMediaSize(mediaSize)));

  useEffect(() => {
    if (_toast.text){
      toast[_toast.msgType](_toast.text, {
        onClose: () => {
          _resetToastMsg();
        }
      });
    }
  });

  const dynamicRoutesConfig = [
    {
      path: "/",
      pathToComponent: "pages/MainPage"
    },
    {
      path: "/main",
      pathToComponent: "pages/MainPage"
    },
    {
      path: "/own_list",
      pathToComponent: "pages/OwnList"
    }
  ];

  return(
    <Router history={history}>
      <div id={"inner-wrapper"} className={_app.mediaSize + (_app.menuIsOpen ? " menu-open" : "")}>

        <Media
          query="(max-width: 767px)"
          onChange={matches => {
            if(matches){
              _setMediaSize("mobile");
            }else{
              _setMediaSize("desktop");
            }
          }}/>

        <ToastContainer className="toast-top-right toast-container" position={"top-right"} autoClose={1600}/>

        <Header />

        <main className={"main"}>
        <Switch>
          {
            dynamicRoutesConfig.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                component={(props) => {

                  const DynamicComponent = dynamic( () => import(`../components/${route.pathToComponent}`))
                  return <DynamicComponent />;
                  // return(
                  //   <DynamicImport load={() => import(`../components/${route.pathToComponent}`)}>
                  //     {
                  //       (Component) => {
                  //         return (
                  //           Component === null ? null : <Component {...props}/>
                  //         )
                  //       }
                  //     }
                  //   </DynamicImport>
                  // )
                }}
                exact={true}
              />
            ))
          }

          <Route component={NotFoundPage} />
        </Switch>
        </main>

        <Footer/>
      </div>
    </Router>
  )
}
