
import './App.css';
import React from 'react';
import {BrowserRouter, Routes,Route} from"react-router-dom"
import Navigation from './Components/Navigatin';
import Home from './Components/Home';





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
         <BrowserRouter>
         <Navigation/>
      <Routes>
      <Route path="/" element={<Home />} />


      
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
