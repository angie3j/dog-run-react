import React, { useEffect, useState } from 'react';

import DogCard from '../dogCard/DogCard';
import SearchBar from '../searchBar/SearchBar';

const DogList = () => {

    // hooks
    const [dogs, setDogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    // functions
    useEffect(() => {
  
      const url = 'https://dog-run-app-backend.herokuapp.com/dogs';
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setDogs(data.dogDataForDelivery.dogs);
        })
        // get our dogs
        // update our dogs hook with the new data
    }, []); // empty array means run on mount
  
    let filteredDogs = dogs; 
    if(searchTerm){
      filteredDogs = dogs.filter(dog => {
        const ownersFullName = `${dog.ownersFirstName} ${dog.ownersLastName}`;
        
        const fullNameToLowerCase = ownersFullName.toLowerCase();
        
        const searchTermToLowerCase = searchTerm.toLowerCase();
        
        return fullNameToLowerCase.includes(searchTermToLowerCase);
      });
    }
    console.log(filteredDogs)
  
    return (
      <div className='dogList'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {filteredDogs.map((dog) => {
              return(
                <DogCard dog={dog} key={dog.id} />
              )
          })
          }
          {filteredDogs.length === 0 && <div className='dogList__noResults'>No Results </div>} 
      </div>
    );
  }
  
  export default DogList;