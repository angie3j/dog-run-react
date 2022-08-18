import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DogList from "./components/dogList/DogList";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/events" element={<DogList />} /> */}
        <Route path="/dogs" element={<DogList />} />
        {/* <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs" element={<DogList />} /> */}
      </Routes>
    </>
  );
}

export default App;
