import React from 'react';
import './search.css'

const SearchComponent = () => {
    return (
        <div>
            <form action="/search" className='search_form'>
                <input type="text" name='title' placeholder='Enter Movie Title' className='search_input'/>
                <button type='submit' className='search_button'>Submit</button>
            </form>
            
            </div>
    );
};

export default SearchComponent;