import React, {Component} from 'react';
import {connect} from "react-redux";

class OwnList extends Component{
  render(){
    return (
      <div className={""}>
        <div className={"content-container"}>
          OwnList
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(OwnList);
