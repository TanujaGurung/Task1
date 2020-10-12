import React from 'react';
import logo from './logo.svg';
import './App.css';
import Innerdiv from './Innerdiv';
import logo1 from './logo1.png';


function App() {
  return (
    <div className="container">
    
    <ul>
    <li><img id="logo" src={logo1}></img></li>
  <li><a href="#">Contact us</a></li>
  <li><a href="#news">Delivery in</a></li>
  <li><a href="#contact">Menu</a></li>
  </ul>
   <h1>___________________________________________________________________</h1>
   <Innerdiv />
   <h2>MADE WITH LOVE</h2>
   <h3 id="head1">Maecenas interdum nisl </h3>
   <br></br>
  <h3 id="head2"> sit amet pulvinar volutpat.</h3> 
  <br></br>
   <h3 id="head3">felis eu neque vehicula fringilla.</h3>
   <button id="explore">EXPLORE</button>
  
    </div>
  );
}

export default App;
