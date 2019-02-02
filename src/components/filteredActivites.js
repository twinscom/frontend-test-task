import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import { Button, Headline, ContainerInnerWrap, ActivityWrap } from './commonData'

const FilterBlock = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    margin: 0 auto 20px;
    border-radius: 10px;
    padding: 15px 25px;
    border: 1px solid #5BC0BE;
    transition: all .5s;
    color: #0B132B;
    width: 100%;
    &:active,&:focus{
        border-color:#0B132B;
    }
`
const Select = styled.select`
    margin: 0 auto 20px;
    border-radius: 10px;
    padding: 15px 25px;
    border: 1px solid #5BC0BE;
    transition: all .5s;
    color: #0B132B;
    width: 100%;
    &:active,&:focus{
        border-color: #0B132B;
    }
`
const FilterComment = styled.div`
    margin: 40px 0 10px;
    text-align: left;
    line-height: 20px;
`
const FilteredActivites = () => {
    let [filterType, setfilterType] = useState('priceRange');
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(1);

    function handleChange(e) {
        setfilterType(e.target.value);
        setFirstValue(0);
        setSecondValue(1);
    }

    function getActivity() {
        if (validation()) {
            let url = 'http://www.boredapi.com/api/activity';

            if (filterType === 'priceRange') {
                url = `${url}?minprice=${firstValue}&maxprice=${secondValue}`;
            } else {
                url = `${url}?participants=${firstValue}`;
            }
            console.log(url);
        }
    }

    function validateValue(value) {
        if (value === null || value === undefined || isNaN(value) || value < 0 || value > 1) {
            return false;
        }
        return true;
    }
    function validation() {
        if (filterType === 'priceRange') {
            if (firstValue > secondValue) {
                return false;
            }
            return (validateValue(firstValue) && validateValue(secondValue));
        } else {
            return validateValue(firstValue);
        }
    }
    function onlyDigits(e) {
        e.target.value = e.target.value.replace(/[^0-9\.]+/g, '');
    }

    return (
        <>
            <ContainerInnerWrap>
                <Headline>Filters</Headline>
                <FilterBlock className="filterBlock">
                    <Select value={filterType} onChange={handleChange}>
                        <option value="priceRange">Price range</option>
                        <option value="participants">Participants</option>
                    </Select>

                    <FilterComment>Please enter {filterType === 'priceRange' ? 'price between 0 and 1.' : 'number of participants of the activity.'}</FilterComment>

                    <Input type="text"
                        value={firstValue}
                        onChange={e => setFirstValue(e.target.value)}
                        className={!validateValue(firstValue) ? 'error-input' : null}
                        placeholder={filterType === 'priceRange' ? 'Min value' : 'Participants'}
                        onKeyUp={onlyDigits}/>
                    <Input type="text"
                        value={secondValue}
                        onChange={e => setSecondValue(e.target.value)}
                        className={!validateValue(secondValue) ? 'error-input' : null}
                        style={filterType === 'priceRange' ? { dislay: 'inline' } : { display: 'none' }}
                        placeholder={filterType === 'priceRange' ? 'Max value' : null}
                        onKeyUp={onlyDigits}/>
                    <Button onClick={getActivity}
                        style={{ margin: '0 auto' }}
                        disabled={!(validateValue(+firstValue) && validateValue(+secondValue)) ? 'disabled' : null}>
                        Filter
                        </Button>
                </FilterBlock>
            </ContainerInnerWrap>
        </>
    )
}

export default FilteredActivites;