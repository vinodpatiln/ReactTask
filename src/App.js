import React from 'react';
import './App.css';
import Header from './component/header';
import Home from './home';
import Filmcomponent from './component/filmcomponent';
import Peoplecomponent from './component/peoplecomponent';
import Planetscomponent from './component/planetscomponent'; 
import Speciescomponent from './component/speciescomponent';
import Starshipscomponent from './component/starshipscomponent';
import Vehiclesscomponent from './component/vehiclescomponent';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="films" element={<Filmcomponent/>} />
      <Route path="peoples" element={<Peoplecomponent />} />
      <Route path="planets" element={<Planetscomponent/>} />
      <Route path="species" element={<Speciescomponent/>} />
      <Route path="starships" element={<Starshipscomponent/>} />
      <Route path="Vehicles" element={<Vehiclesscomponent/>} />
    </Routes>

    
    </div>
  );
}

export default App;
