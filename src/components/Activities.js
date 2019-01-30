import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Activities() {

    const [data, setData] = useState({});

    async function getActivity(result) {
        result = await axios(
            'http://www.boredapi.com/api/activity/'
        );
        setData(result.data);
    }

    useEffect(() => {
        getActivity(data);
    },[]);

    const { accessibility, activity, key, participants, price, type } = data;
    
    return (
        <div>
            <p>accessibility: {accessibility}</p>
            <p>activity: {activity}</p>
            <p>key: {key}</p>
            <p>participants: {participants}</p>
            <p>price: {price}</p>
            <p>type: {type}</p>
        </div>
    );
}
export default Activities;