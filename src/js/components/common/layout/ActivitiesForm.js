import React, { useState, useEffect, useReducer } from 'react';
import DropdownCard from "./dropdown/DropdownCard";
import FormValidator from "../libs/FormValidator";

import Button from "./styled-components/Button";

export default function ActivitiesForm(props){

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

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "CHANGE_TYPE":
          return {
            ...state,
            type: action.value
          };

        case "CHANGE_PRICE":
          return {
            ...state,
            price: action.value
          };

        case "CHANGE_KEY":
          return {
            ...state,
            key: action.value
          };

        case "CHANGE_ACCESSIBILITY":
          return {
            ...state,
            accessibility: action.value
          };

        case "VALIDATION":
          return {
            ...state,
            validation: action.validation
          };

        default:
          return state;
      }
    },
    {
      type: null,
      price: null,
      key: null,
      accessibility: null,
      validation: validator.valid()
    }
  );

  useEffect(() => {
    // console.log("create/update", state);
  });

  function onSubmitHandler(e){
    e.preventDefault();
    const query = {};
    for(let key in state){
      if(state[key] && state[key] !== "") query[key] = state[key];
    }
    delete query["validation"];

    const url = ("http://www.boredapi.com/api/activity?" + JSON.stringify(query)).replace(",", "&").replace(/\"\:/g, "=").replace(/\{|\"|\}/g, "");
    props["sendRequest"](url);
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
      type: ("change_type").toUpperCase(),
      value
    })
  }

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

  const theme = {main: "#80d066"};

  return (
    <form className={"default-form m20-0"} onSubmit={onSubmitHandler}>

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
          <input className={"form-control " + (state.validation.price["isInvalid"] && "has-error")}
                 type="text" name="price" defaultValue={state.price ? state.price : ""}
                 onChange={(e) => onChangeHandler("price", e.target.value)}/>
          <span className={"error-block"}>{state.validation.price.message}</span>
        </div>

        <div className="col-6 col-sm-6 form-group">
          <div><label className="control-label">Accessibility: </label></div>
          <input className={"form-control "  + (state.validation.accessibility["isInvalid"] && "has-error")}
                 type="text" name="accessibility" defaultValue={""}
                 onChange={(e) => onChangeHandler("accessibility", e.target.value)}/>
          <span className={"error-block"}>{state.validation.accessibility.message}</span>
        </div>

        <div className="col-6 col-sm-6 form-group">
          <div><label className="control-label">Activity id: </label></div>
          <input className={"form-control "  + (state.validation.key["isInvalid"] && "has-error")}
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
              props["sendRequest"]("http://www.boredapi.com/api/activity");
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

