import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <div className="input-container">
            <i className="icon"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></i>
            <input className="input-field" type="text" placeholder="Mau makan apa hari ini?"/>
        </div>
    )
}

export default Search;