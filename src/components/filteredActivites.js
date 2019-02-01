import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

const SelectWrap = styled.div`
margin-bottom: 20px;
`
const QueryType = styled.div``

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

    return (
        <>
            <SelectWrap>
                <select value={filterType} onChange={handleChange}>
                    <option value="priceRange">Price range</option>
                    <option value="participants">Participants</option>
                </select>
            </SelectWrap>

            <QueryType>
                <div className="filterBlock">
                    <form onSubmit={getActivity}>
                        <input type="text"
                            value={firstValue}
                            onChange={e => setFirstValue(e.target.value)} />
                        <input type="text"
                            value={secondValue}
                            onChange={e => setSecondValue(e.target.value)}
                            className={filterType === 'priceRange' ? '' : 'display-none'} />
                        <input className='btn' type="submit" />
                    </form>
                </div>
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