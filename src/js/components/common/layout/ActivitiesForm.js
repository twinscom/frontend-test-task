import React, {useState, useEffect, useReducer, useCallback} from 'react';
import qs from "qs";
import DropdownCard from "./dropdown/DropdownCard";
import FormValidator from "../libs/FormValidator";
import activitiesFormReducer from "../../../reducers/local-reducers/activitiesForm"

import Button from "./styled-components/Button";
import { showToastMsg } from "../../../actions/toast";
import { useDispatch } from "redux-react-hook";

export default function ActivitiesForm({sendRequest}){

  const validator = new FormValidator([
    {
      field: 'price',
      method: 'isFloat',
      validWhen: true,
      options: [{
        min: 0,
        max: 1
      }],
      message: "Must be a positive number, between 0 and 1. "
    },
    {
      field: 'accessibility',
      method: 'isFloat',
      validWhen: true,
      options: [{
        min: 0,
        max: 1
      }],
      message: "Must be a positive number, between 0 and 1. "
    },
    {
      field: 'key',
      method: 'isNumeric',
      validWhen: true,
      message: "Must be a positive number. ",
      multiply: true
    },
    {
      field: 'key',
      method: 'isLength',
      validWhen: true,
      options: [{
        min: 7,
        max: 7
      }],
      message: "Id must contain 7 signs. ",
      multiply: true
    },
  ]);

  const initialState = {
    type: null,
    price: null,
    key: null,
    accessibility: null,
    validation: validator.valid()
  };

  const [state, dispatch] = useReducer(activitiesFormReducer, initialState);

  const _dispatch = useDispatch();
  const _showToastMsg = useCallback((text, msgType) => _dispatch(showToastMsg(text, msgType)));

  function onSubmitHandler(e){
    e.preventDefault();
    const query = {};
    for(let key in state){
      if(state.hasOwnProperty(key) && state[key] ){
        query[key] = state[key]
      }
    }
    delete query.validation;

    const url = ("http://www.boredapi.com/api/activity?" + qs.stringify(query));

    if(!qs.stringify(query).length){
      _showToastMsg("You should to fix an error!", "error")
    }else{
      sendRequest(url);
    }
  }

  function onChangeHandler(field, value){

    const validation = validator.validate({[field]: value}, field, state.validation);

    dispatch({type: "VALIDATION", validation});

    if(!validation[field].isInvalid) {
      dispatch({
        type: ("change_" + field).toUpperCase(),
        value
      })
    }
  }

  function onDropdownChangeHandler(value){
    dispatch({
      type: "CHANGE_TYPE",
      value
    })
  }

  const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"].map((key) => {
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
  },
  theme = {main: "#80d066"};

  return (
    <form className="default-form m20-0" onSubmit={onSubmitHandler}>

      <div className="row ">
        <div className="col-6 col-sm-6 form-group">
          <label className="control-label">Type: </label>
          <DropdownCard
            value={defType}
            onDropdownChangeHandler={onDropdownChangeHandler}
            dropdownArrItems={types}/>
        </div>

        <div className="col-6 col-sm-6 form-group">
          <div><label className="control-label">Price: </label></div>
          <input className={"form-control " + (state.validation.price.isInvalid && "has-error")}
                 type="text" name="price" defaultValue={""}
                 onChange={(e) => onChangeHandler("price", e.target.value)}/>
          <span className={"error-block"}>{state.validation.price.message}</span>
        </div>

        <div className="col-6 col-sm-6 form-group">
          <div><label className="control-label">Accessibility: </label></div>
          <input className={"form-control "  + (state.validation.accessibility.isInvalid && "has-error")}
                 type="text" name="accessibility" defaultValue={""}
                 onChange={(e) => onChangeHandler("accessibility", e.target.value)}/>
          <span className={"error-block"}>{state.validation.accessibility.message}</span>
        </div>

        <div className="col-6 col-sm-6 form-group">
          <div><label className="control-label">Activity id: </label></div>
          <input className={"form-control "  + (state.validation.key.isInvalid && "has-error")}
                 type="text" name="key" defaultValue={""}
                 onChange={(e) => onChangeHandler("key", e.target.value)}/>
          <span className={"error-block"}>{state.validation.key.message}</span>
        </div>
      </div>

      <div className="row mt-20">
        <div className="col-24">
          <Button
            onClick={(e) => {
              e.preventDefault();
              sendRequest("http://www.boredapi.com/api/activity");
            }}>
            Random event
          </Button>
          <Button theme={theme} type={"submit"}>Find event</Button>
          {/*<Button variant={"default"}>Submit</Button>*/}
        </div>
      </div>
    </form>
  );
};

