import React from 'react';
import {

  Routes, 
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import DogList from './components/dogList/DogList';
import NavBar from './components/navBar/NavBar';

import './App.scss';

function App() {
  return (
    <div className="App">

      <NavBar />
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/dogs' element={<DogList />} />
      </Routes>
     
    </div>
  );
}

export default App;
