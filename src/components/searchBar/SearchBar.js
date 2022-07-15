import React from 'react';

import'./SearchBar.scss';

function SearchBar ({searchTerm, setSearchTem}) {

    // functions
    const updateSearchTerm = (e) => {
        setSearchTem(e.target.value);
    }

    // return 
    return(
        <input
           className='searchBar'
           placeholder='Search by Dog Name'
           value={searchTerm}
           onChange={updateSearchTerm}
        />
    )


}

export default SearchBar;