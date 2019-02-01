import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from './commonData';

const SelectWrap = styled.div`
margin-bottom: 20px;
`
const QueryType = styled.div``

function hideElem(elem) {
    elem.classList.add('display-none');
}

const FilterContent = () => {
    let [filterType, setfilterType] = useState('priceRange');
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    function handleChange(e) {
        setfilterType(e.target.value);
        console.log(e.target.value);

        const inputs = document.querySelectorAll('.queryBlock input');
        console.log(inputs[1]);


        if ((filterType !== 'priceRange') || (filterType !== 'accessibilityRange')) {
            hideElem(inputs[1]);
        }

        // allBlocks.forEach(block => {
        //     if (block.style.display !== 'none') {
        //         block.style.display = 'none';
        //     }
        // });
        // selectedBlock.style.display = 'block';
    }
    function handleSubmit(e) {
        e.preventDefault();
    }

    const QueryTypeContent = () => {

        return (
            <div className="queryBlock">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={firstValue} onChange={e => setFirstValue(e.target.value)} />
                    <input type="text" value={secondValue} onChange={e => setSecondValue(e.target.value)} />
                    <input className='btn' type="submit"/>
                </form>
            </div>
        )
    }

    function getActivity() {
        let url = 'http://www.boredapi.com/api/activity';

        if (filterType === 'priceRange') {
            url = `${url}?minprice=${firstValue}&maxprice=${secondValue}`;
        }
    }

    return (
        <>
            <SelectWrap>
                <select value={filterType} onChange={handleChange}>
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
                <QueryTypeContent />
                {/* <div className="block priceRange">
                    <input type="text" onInput={e => setFirstValue(e.target.value)} />
                    <input type="text" onInput={e => setSecondValue(e.target.value)} />
                </div>
                <div className="block participants" style={{ display: 'none' }}>
                    <p>Enter number of participants</p>
                    <input type="text" onInput={e => setFirstValue(e.target.value)} />
                </div>
                <div className="block key" style={{ display: 'none' }}>Key</div>
                <div className="block type" style={{ display: 'none' }}>Type</div>
                <div className="block price" style={{ display: 'none' }}>Price</div>
                <div className="block accessibility" style={{ display: 'none' }}>Accessibility</div>
                <div className="block accessibilityRange" style={{ display: 'none' }}>Accessibility range</div> */}
            </QueryType>

            {/* <Button>Apply filter</Button> */}
        </>
    )
}

const FilteredActivites = () => {


    return (
        <>
            <h1>This is a bored component</h1>
            <FilterContent />
        </>
    )
}

export default FilteredActivites;