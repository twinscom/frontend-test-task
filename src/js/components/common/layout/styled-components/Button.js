import React from "react"
import styled, { ThemeProvider } from 'styled-components';
import theme from "styled-theming";
import PropTypes from 'prop-types'


export default function Button(props){

  // const backgroundColor = theme.variants("mode", "variant", {
  //   default: { light: "#3746F1", dark: "#0D1FE7" },
  //   primary: { light: "#0EACEC", dark: "#0A9BD6" },
  //   success: { light: "#89F25A", dark: "#52EC0E" },
  //   danger: { light: "#E32B2B", dark: "#C62424" },
  //   warning: { light: "#F1AC65", dark: "#F38B20" },
  // });
  //
  // console.log(backgroundColor);
  //
  // const Button = styled.button(props => ({
  //   "font-size": "1em",
  //   "margin": "1em",
  //   "padding": "0.25em 1em",
  //   "border-radius": "3px",
  //   // "color": props.theme.main,
  //   // "border": `2px solid ${props.theme.main}`,
  //   "background-color": backgroundColor(props)
  // }));
  //
  // Button.propTypes = {
  //   variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning'])
  // };
  //
  // Button.defaultProps = {
  //   variant: 'default',
  // };

  const Buttons = styled.button(props => ({
    "font-size": "1em",
    "margin": props.theme.gap,
    "padding": "0.25em 1em",
    "border-radius": "3px",
    "color": props.theme.main,
    "border": `2px solid ${props.theme.main}`
  }));

  Buttons.defaultProps = {
    theme: {
      main: "palevioletred",
      gap: "15px"
    }
  };


  if(props.theme){
    return(
      <ThemeProvider theme={props.theme}>
        <Buttons {...props}>{props.children}</Buttons>
      </ThemeProvider>
    )
  }else{
    return(
      <Buttons {...props}>{props.children}</Buttons>
    )
  }


  // return (
  //   <Button {...props}>
  //     {props.children}
  //   </Button>
  // )
}