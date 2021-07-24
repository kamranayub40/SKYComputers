import './App.css';
import Home from '../src/Home'

import About from '../src/about'
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from '../src/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../src/Admin '

function App() {
  return (
    <>
    {/* <Router> */}
        {/* <MyAppNavbar /> */}
        {/* <Routes/>
    </Router> */}
    {/* <View> */}
      <Sidebar/>
    {/* </View> */}
   
    </>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <Home/>
    //     {/* <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> */}
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     > */}
    //       {/* Learn React
    //     </a> */}
    //   </header>
    // </div>
  );
}

export default App;
