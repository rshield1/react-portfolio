import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Logo from './Logo'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
    
      <Logo/>
      {/* <h1>LEARN-APPLY-TEACH</h1> */}
      <p className='text-primary'>LEARN -- APPLY -- TEACH</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;