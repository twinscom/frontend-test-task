import React, { Component } from 'react';
import DropdownCard from "./dropdown/DropdownCard";

import Button from "./styled-components/Button";


export default class ActivitiesForm extends Component{


  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({readyToSwitch: true});

    const new_query = {};
    new_query.algorithm = this.props.algorithm;

    Object.keys(this.refs).forEach((item, i) => {
      if(item.indexOf("input_") !== -1 && this.refs[item].value && this.refs[item].value !== ""){
        new_query[this.refs[item].name] = this.refs[item].value;
      }
      if(item.indexOf("dropdown_") !== -1 && this.refs[item].state.value.value){
        new_query[this.refs[item].state.value.stateProp] = this.refs[item].state.value.value;
      }
    });

    const url = "http://www.boredapi.com/api/activity?" + encodeURIComponent(JSON.stringify(new_query));
    console.log(url)
  };


  render(){
    let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"].map((key) => {
      return {
        name: key,
        value: key,
        stateProp: "type"
      }
    }),
    defType = {
      name: "Chose type",
      value: null,
      stateProp: "type"
    };


    const theme = {
      main: "mediumseagreen",
      gap: "15px 15px 15px 0"
    };


    return (
      <form className={"default-form m20-0"} onSubmit={this.onSubmitHandler}>

        <div className="row ">
          <div className="col-6 col-sm-6 form-group">
            <label className="control-label">Type: </label>
            <DropdownCard
              ref={"dropdown_type"}
              value={defType}
              dropdownArrItems={types}/>
          </div>

          <div className="col-6 col-sm-6 form-group">
            <div><label className="control-label">Price: </label></div>
            <input className="form-control" type="text" name="price" defaultValue={""} ref={"input_price"}/>
          </div>

          <div className="col-6 col-sm-6 form-group">
            <div><label className="control-label">Accessibility: </label></div>
            <input className="form-control" type="text" name="accessibility" defaultValue={""} ref={"input_accessibility"}/>
          </div>

          <div className="col-6 col-sm-6 form-group">
            <div><label className="control-label">Activity id: </label></div>
            <input className="form-control" type="text" name="key" defaultValue={""} ref={"input_key"}/>
          </div>
        </div>

        <div className="row mt-20">
          <div className="col-24">
            <Button theme={theme} onClick={this.props["sendRequest"]}>Random event</Button>
            <Button onClick={this.props["sendRequest"]}>Find event</Button>
            {/*<Button variant={"default"}>Submit</Button>*/}
          </div>
        </div>
      </form>
    );
  }
};

