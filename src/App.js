import React from 'react';
import logo from './logo.svg';

import Search from './components/Search';
import SpecialOffers from './components/SpecialOffers';
import Salad from './components/Salad';
import MainCourse from './components/MainCourse';
import Gift from './components/Gift';

import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Opeqe</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>

        <Search/>
        <SpecialOffers/>
        <Salad/>
        <MainCourse/>
        <Gift/>
        <Footer/>

    </div>
  );
}

export default App;
