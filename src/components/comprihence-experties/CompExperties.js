import React from 'react'
import './CompExperties.css'
import researchImage from '../../assets/hero/microscope-7100809_640.jpg';

const CompExperties = () => {
  return (
    <div className='experties-main-container'>
        <div className='experties-inner-section'>
            <div className='experties-image-div'>
                <img src={researchImage} alt='img' />
            </div>
            <div className='experties-details-section'>
                <div className='experties-inner-details'>
                <h3>Comprehensive expertise:</h3>
                <p>SMED Clinical Research is a leading medical advisory company that 
                    offers a comprehensive range of services to support businesses in the 
                    healthcare industry.
                </p>
                <p>
                    Our team of experts is committed to providing the highest quality medical 
                    advisory, medical writing, medical support, and financial analysis services 
                    to help businesses achieve their goals and objectives.
                </p>
                <p>
                    At SMED Clinical Research, we understand that businesses need to stay 
                    ahead of the curve to succeed. 
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompExperties
