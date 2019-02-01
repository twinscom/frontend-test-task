import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from './commonData';

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
const Participants = styled.div`
    display: flex;
    justify-content: space-between;
`
const Key = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    margin-bottom: 20px !important;	
`
const Type = styled.div`

`
const PriceWrap = styled.div`
    text-align: center;
    margin-top: 40px;
`
const Price = styled.span`
    font-size: 24px;
`
const PreambulaText = styled.div`
    line-height: 26px;
    margin-bottom: 20px;
`
const PreambulaHeader = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin: 40px 0;
`
// const Preambula = () => {
//     return (
//         // TODO Refactoring: make preambula to choose depending on the DATA obj
//         <>
//             <PreambulaHeader>WhattodoApp</PreambulaHeader>
//             <PreambulaText>We'll help you! Just click the button and you'll see the possible variant for your vocation...</PreambulaText>
//         </>
//     )
// }

function Display() {

    // TODO make DATA obj global
    const [data, setData] = useState({});
    let [clickCount, setClickCount] = useState(0);

    async function getRandomActivity() {
        const result = await axios(
            'http://www.boredapi.com/api/activity/'
        );
        setData(result.data);
        setClickCount(clickCount + 1);
    }

    if (Object.keys(data).length === 0) {
        return (
            <>
                {/* TODO refactoring: remove duplicate code */}
                <PreambulaHeader>WhattodoApp</PreambulaHeader>
                <PreambulaText>Don't know what to do? We'll help you! Just click the button and you'll see the possible variant for your vocation...</PreambulaText>
                <Button onClick={getRandomActivity}>Random</Button>
            </>
        )
    } else {
        return (
            <>
                {/* TODO refactoring: remove duplicate code */}
                <PreambulaHeader>WhattodoApp</PreambulaHeader>
                <PreambulaText>Don't like that? Click... ;-)</PreambulaText>
                <Button onClick={getRandomActivity} style={{ marginBottom: '20px' }}>Random</Button>


                <ActivityWrap style={{ backgroundColor: '#3F4045', color: '#F4F4F8' }}>
                    <ActivityHeader>{data.activity}</ActivityHeader>
                    <Key>
                        id: {data.key}
                    </Key>
                    <Type>
                        <span>Activity type: <strong style={{ color: '#5BC0BE' }}>{data.type}</strong></span>
                    </Type>
                    <Participants>
                        Participants: {data.participants}
                    </Participants>
                    <PriceWrap>
                        <Price>
                            <i style={data.price === 0 ? { textTransform: 'uppercase', color: '#FED766', fontWeight: 700 } : {}}>
                                {data.price === 0 ? `It's free!` : `Price: $${data.price}`}
                            </i>
                        </Price>
                    </PriceWrap>
                </ActivityWrap>
            </>
        )
    }
}

export default Display;