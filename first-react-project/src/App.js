import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Nav from './Nav'
import Header from './Header';
import Informations from './Information'
import Forms from './Forms'

function App() {

  return (
    <>
      <div className='main-wrapper'>
        <Header />
        <main>
          <Informations />
          <Forms />
        </main>
      </div>
      <Nav />
    </>
  );
}

export default App;
