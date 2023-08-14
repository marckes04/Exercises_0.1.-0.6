// SearchFilter.js
import React from 'react';

const SearchFilter = ({ searchTerm, handleSearch }) => {
    return (
        <div>
            <input
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchFilter;
