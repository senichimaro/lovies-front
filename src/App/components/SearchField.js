import React from 'react'

// icons
import { BsFilm } from "react-icons/bs";


const SearchField = ({ searchTerm, handleSearch }) => {

    const _handleInput = e => {
        e.preventDefault()
        const { value } = e.target;
        handleSearch(value)
    }

    return (
        <div className="container">            
            <div className="input-group my-3">
                <span className="input-group-text" id="basic-addon1">
                    <BsFilm />
                </span>
                <input 
                    value={searchTerm} 
                    onChange={_handleInput} 
                    type="text" 
                    className="form-control" 
                    placeholder="Search movie..." 
                    aria-label="movie-search" 
                    aria-describedby="movie-search-field" 
                />
            </div>
        </div>
    )
}

export default SearchField