import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button, Headline, ContainerInnerWrap, ActivityContent } from './commonData';
import { Link } from "react-router-dom";

const PreambulaText = styled.div`
    line-height: 26px;
    margin-bottom: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
`
const Modal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.75);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    
    .modal{
        padding: 20px;
        background-color: #F4F4F8;
        width: 335px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 10px;

        h3{
            font-size: 20px;
            font-weight: 700;
        }

        p{
            line-height: 24px;
        }

        &-buttons{
            display: flex;
            justify-content: center;
        }
    }
`
function Activity() {
    const [data, setData] = useState({});
    const [clickCount, setClickCount] = useState(1);
    let [modalOpened, setModalOpened] = useState(false);

    async function getRandomActivity() {
        const result = await axios(
            'http://www.boredapi.com/api/activity/'
        );
        setData(result.data);
        setClickCount(clickCount + 1);
        if ((clickCount % 5) === 0) {
            setTimeout(() => {
                setModalOpened(true);
            }, 500);
        }
    }
    function modalClose() {
        setModalOpened(false);

    }

    return (
        <>
            <ContainerInnerWrap>
                <Headline>WhattodoApp</Headline>
                <PreambulaText>{Object.keys(data).length === 0 ? `Don't know what to do? We'll help you! Just click the button and you'll see the possible variant for your vocation...` : `Don't like that? Click... ;-)`}</PreambulaText>
                <Button onClick={getRandomActivity} style={{ marginBottom: '20px' }}>Random</Button>

                <ActivityContent data={data} />
            </ContainerInnerWrap>
            <Modal className={modalOpened ? '' : 'display-none'} id='modal' >
                <div className="modal">
                    <h3>You found {clickCount - 1} activities</h3>
                    <p>Still don't know what to choose? Maybe filters help you...</p>
                    <div className="modal-buttons">
                        <div className='col-1-of-2 flex-center-center'>
                            <button className='btn btn-small' onClick={modalClose}>Cancel</button>
                        </div>
                        <div className="col-1-of-2 flex-center-center">
                            <Link to="/filter/" className='btn btn-small'>Try!</Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Activity;