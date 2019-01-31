import React from 'react';

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

export default Settings;