import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from './commonData';

const SelectWrap = styled.div`
margin-bottom: 20px;
`
const QueryType = styled.div``

const FiterContent = () => {
    let [value, setValue] = useState('priceRange');
    const queries = {
        key: 'key',
        type: 'type',
        participants: 'participants',
        price: 'price',
        priceRange: {
            minprice: 'minprice',
            maxprice: 'maxprice'
        },
        accessibility: 'accessibility',
        accessibilityRange: {
            minaccessibility: 'minaccessibility',
            maxaccessibility: 'maxaccessibility'
        }
    }
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    function handleChange(e) {
        const filter = e.target.value;
        setValue(filter);
        const allBlocks = document.querySelectorAll('.block'),
            selectedBlock = document.querySelector('.' + filter);

        allBlocks.forEach(block => {
            if (block.style.display !== 'none') {
                block.style.display = 'none';
            }
        });
        selectedBlock.style.display = 'block';
    }

    function getActivity() {
        const url = 'http://www.boredapi.com/api/activity';
        
        console.log(`http://www.boredapi.com/api/activity?${queries[value]}=${123}`);
    }

    return (
        <>
            <SelectWrap>
                <select value={value} onChange={handleChange}>
                    <option value="priceRange">Price range</option>
                    <option value="participants">Participants</option>
                    <option value="key">Key</option>
                    <option value="type">Type</option>
                    <option value="price">Price</option>
                    <option value="accessibility">Accessibility</option>
                    <option value="accessibilityRange">Accessibility range</option>
                </select>
            </SelectWrap>

            <QueryType>
                <div className="block priceRange">
                    <input type="text" onInput={e => setMinPrice(e.target.value)} />
                    <input type="text" onInput={e => setMaxPrice(e.target.value)} />
                </div>
                <div className="block participants" style={{ display: 'none' }}>Participants</div>
                <div className="block key" style={{ display: 'none' }}>Key</div>
                <div className="block type" style={{ display: 'none' }}>Type</div>
                <div className="block price" style={{ display: 'none' }}>Price</div>
                <div className="block accessibility" style={{ display: 'none' }}>Accessibility</div>
                <div className="block accessibilityRange" style={{ display: 'none' }}>Accessibility range</div>
            </QueryType>

            <Button>Apply filter</Button>
            <Button onClick={console.log(minPrice, maxPrice)}>Apply filter</Button>
        </>
    )
}

const FilteredActivites = () => {


    return (
        <>
            <h1>This is a bored component</h1>
            <FiterContent />
        </>
    )
}

export default FilteredActivites;