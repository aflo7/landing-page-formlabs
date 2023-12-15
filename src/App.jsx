import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Divider from '@mui/material/Divider';
import { RxHamburgerMenu } from 'react-icons/rx';

function App() {
  return (
    <>
      <div className="top-main">
        <div className="nav-wrapper">
          <nav>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img src="https://careers.formlabs.com/_next/static/images/logo_white-53cf2c8c81d79c677e097522bc77c1d5.svg" />
              <Divider
                orientation="vertical"
                flexItem
                style={{ backgroundColor: 'white' }}
              />
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Careers
              </div>
            </div>
            <div className="rx-menu-wrapper">
              <RxHamburgerMenu />
            </div>
            <div className="hidden">
              <div>Our Teams</div>
              <div>Locations</div>
              <div>Back To Formlabs.com</div>
            </div>
          </nav>
        </div>
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}
          className='formlabs-careers-text-wrapper'
        >
          <div>
            <h1>Formlabs Careers</h1>
            <h2>Empowering anyone to make anything.</h2>
            <button id="joinUsBtn">Join Us</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
