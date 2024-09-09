import React from 'react'
import './Hero.css';
// import heroImage from ''
import heroImage from '../../assets/hero/About-Page-health_Image.jpg'

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-left-section '>
        <div className='hero-text-section'>
            <p className='hero-text-main-heading'>MEDIS assisting life science <br /> progress  by providing services</p>
            <p className='hero-text-second-heading'> (contract & full time) to Startup, Biotech, <br /> Pharmaceutical and CORs in:</p>
            <button className='hero-button'>Join Us Now!</button>
        </div>
        </div>
        <div className='hero-image-section'>
            <img src={heroImage} alt='img' />
            {/* <img src={heroImage} alt='img' /> */}
        </div>
    </div>
  )
}

export default Hero