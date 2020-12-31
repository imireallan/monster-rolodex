import React from 'react';
import './search.styles.css';

export default function Search({ searchText, onInputChange }) {
    return (
        <div className="search">
            <input
                type="search"
                placeholder="Search monster...."
                value={searchText}
                onChange={(e) => {
                    onInputChange(e.target.value);
                }}
            />
        </div>
    );
}
