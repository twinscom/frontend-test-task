import React, { Component } from 'react';
import {connect} from "react-redux";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { ToastContainer, toast } from 'react-toastify';
import DynamicImport from '../components/common/libs/DynamicImport';

import NotFoundPage from '../components/pages/NotFoundPage';

import Header from "../components/common/layout/Header";
import Footer from "../components/common/layout/Footer";

import { resetToastMsg } from "./../actions/toast";

export const history = createHistory();

class AppRouter extends Component{


  componentWillReceiveProps(nextprops) {
    const that = this;

    if(nextprops.toast.text && this.props.toast.text !== nextprops.toast.text ){
      toast[nextprops.toast.msgType](nextprops.toast.text, {
        onClose: () => {
          that.props.resetToastMsg();
        }
      });
    }
  }

  render(){

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
        <div id="inner-wrapper">

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
                    return(
                      <DynamicImport load={() => import(`../components/${route.pathToComponent}`)}>
                        {
                          (Component) => {
                            return (
                              Component === null ? null : <Component {...props}/>
                            )
                          }
                        }
                      </DynamicImport>
                    )
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
}

const mapStateToDispatch = (state) => ({
  toast: state.toast
});

const mapDispatchToProps = (dispatch) => ({
  resetToastMsg: () => dispatch(resetToastMsg())
});

export default connect(mapStateToDispatch, mapDispatchToProps)(AppRouter);
