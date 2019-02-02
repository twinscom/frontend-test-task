import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import { Button, Headline } from './commonData'

const FilterBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 350px;
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

const FilterContent = () => {
    let [filterType, setfilterType] = useState('priceRange');
    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState();

    function handleChange(e) {
        setfilterType(e.target.value);
        setFirstValue('');
        setSecondValue('');
    }

    function getActivity(e) {
        e.preventDefault();
        let url = 'http://www.boredapi.com/api/activity';

        if (filterType === 'priceRange') {
            url = `${url}?minprice=${firstValue}&maxprice=${secondValue}`;
        } else if (filterType === 'participants') {
            url = `${url}?participants=${firstValue}`;
        }
        console.log(url);
    }

    function validation() {

    }

    function onlyDigits(e) {
        // e.target.value = e.target.value.replace();
    }

    return (
        <>
            <FilterBlock className="filterBlock">
                <Select value={filterType} onChange={handleChange}>
                    <option value="priceRange">Price range</option>
                    <option value="participants">Participants</option>
                </Select>

                <Input type="number"
                    min='0' max='1' step='0.01'
                    value={firstValue}
                    onChange={e => setFirstValue(e.target.value)}
                    onKeyDown={onlyDigits} />
                <Input type="number"
                    min='0' max='1' step='0.01'
                    value={secondValue}
                    onChange={e => setSecondValue(e.target.value)}
                    onKeyDown={onlyDigits}
                    className={filterType === 'priceRange' ? '' : 'display-none'} />
                <Button onClick={getActivity} style={{ margin: '0 auto' }}>Filter</Button>
            </FilterBlock>

            {/* <Button>Apply filter</Button> */}
        </>
    )
}

const FilteredActivites = () => {


    return (
        <>
            <Headline>Filters</Headline>
            <FilterContent />
        </>
    )
}

export default FilteredActivites;