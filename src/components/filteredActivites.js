import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { LastActivity } from './commonData';

// TODO Remove this
const FilteredActivites = () => {
    let lastActivity = useContext(LastActivity);
    console.log(lastActivity);
    return (
        <>
            <h1>This is a bored component</h1>
        </>
    )
}
// end TODO

export default FilteredActivites;