import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ActivityWrap = styled.div`
border-radius: 20px;
padding: 20px;
width: 50%;
margin: 0 auto;
div{
    margin-bottom: 10px;
}
`
const ActivityHeader = styled.h3`
text-align: center;
font-size: 24px;
font-weight: 700;
line-height: 30px;
margin-bottom: 5px;
`
const Preloader = styled.div`
display: flex;
justify-content: center;
`
const Participants = styled.div`
display: flex;
justify-content: space-between;
`
const Key = styled.div`
display: flex;
justify-content: flex-end;
font-size: 12px;
`
const Type = styled.div`

`
const PriceWrap = styled.div`
text-align: center;
`
const Price = styled.span`
font-size: 24px;
`

function Activities(props) {
    const [data, setData] = useState({});

    function randomActivity() {
        async function get() {
            const result = await axios(
                'http://www.boredapi.com/api/activity/'
            );
            setData(result.data);
        }

        useEffect(() => {
            get(data);
        }, []);
    }
    randomActivity();

    const { activity, key, participants, price, type } = data;

    if (Object.keys(data).length === 0) {
        return (
            <Preloader>
                <img src="img/25.gif" alt="Loading..." />
            </Preloader>
        )
    } else {
        return (
            <>
                <ActivityWrap style={{ backgroundColor: props.settings.colors.grey, color: props.settings.colors.white }}>
                    <ActivityHeader>{activity}</ActivityHeader>
                    <Key>
                        id: {key}
                    </Key>
                    <Type>
                        <span>Activity type: <strong style={{ color: props.settings.colors.blue }}>{type}</strong></span>
                    </Type>
                    <Participants>
                        Participants: {participants}
                    </Participants>                    
                    <PriceWrap>
                        <Price>
                            Price:&nbsp;
                            <i style={price === 0 ? { textTransform: 'uppercase', color: props.settings.colors.yellow, fontWeight: 700 } : {}}>
                                {price === 0 ? 'free' : `$${price}`}
                            </i>
                        </Price>
                    </PriceWrap>

                </ActivityWrap>

                {/* <button onClick={randomActivity}>Random</button> */}
            </>
        )
    }
}

export default Activities;