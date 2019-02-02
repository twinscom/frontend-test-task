import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button, Headline, ContainerInnerWrap, ActivityContent } from './commonData';

const PreambulaText = styled.div`
    line-height: 26px;
    margin-bottom: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
`
function Activity() {

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
    return (
        <>
            <ContainerInnerWrap>
                <Headline>WhattodoApp</Headline>
                <PreambulaText>{Object.keys(data).length === 0 ? `Don't know what to do? We'll help you! Just click the button and you'll see the possible variant for your vocation...` : `Don't like that? Click... ;-)`}</PreambulaText>
                <Button onClick={getRandomActivity} style={{ marginBottom: '20px' }}>Random</Button>

                <ActivityContent data={data} />
            </ContainerInnerWrap>
        </>
    )
}

export default Activity;