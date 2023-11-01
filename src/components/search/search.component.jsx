import React from 'react';
import './search.style.css';

const SearchBox = (props) => {
    const {onSearchChange} = props;
    return(
        <input
            className='searchBox'
            type='search'
            placeholder='search monsters ...'
            onChange={onSearchChange}
        />
    );
}

export {SearchBox};