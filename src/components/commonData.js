import React from 'react';
import styled from 'styled-components';

const Settings = React.createContext({
    colors: {
        grey: '#3F4045',
        blue: '#5BC0BE',
        darkBlue: '#0B132B',
        white: '#F4F4F8',
        yellow: '#FED766'
    },
    font: `'Montserrat', sans-serif`
});

const Button = styled.button`
    padding: 15px 40px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    background-color: #5BC0BE;
    border: none;
    color: #F4F4F8;
    cursor: pointer;
    transition: all .5s;

    &:hover{
        background-color: #0B132B;
    }
`

export default Settings;
export { Button };