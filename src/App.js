
import React from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import CadEquip from './components/pages/CadEquip';
import EquipList from './components/pages/EquipList';
import EquipShow from './components/pages/EquipShow';

function App() {

return (
  <div className = "App" > 
 <Router>
    <Navbar />
         <Routes>
            <Route exact path="/" element= {<Home />}></Route>
            <Route path="/Contato" element={<Contato />}></Route>
            <Route path="/CadEquip"element={<CadEquip />} ></Route>
            <Route path="/EquipList" element={<EquipList />}></Route>
            <Route path='/EquipShow' element={<EquipShow />}></Route>
         </Routes>
    </Router>
  </div>
    );
  }

export default App;

