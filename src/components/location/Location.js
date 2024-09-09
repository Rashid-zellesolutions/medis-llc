import React from 'react'
import './Location.css'
import { BsTelephoneFill } from "react-icons/bs";


const MyLocation = () => {
  return (
    <div className='location-main-div' >
        <div className='location-section '>
        <iframe
            style={{width: '100%', height: '100%', border: 0}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.065680135058!2d-79.8115215!3d32.8914714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe6c35c3e1b255%3A0xdae637fe8714ca64!2s1492%20Cypress%20Pointe%20Dr%2C%20Mt%20Pleasant%2C%20SC%2029466%2C%20USA!5e0!3m2!1sen!2sus!4v1633964929008!5m2!1sen!2sus"
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Location Map'
        ></iframe>
            <div className='contact-number-main'>
                <div className='contact-card-section'>
                    <span className='contact-icon-span'>
                        <BsTelephoneFill size={20} />
                    </span>
                    <span className='contact-number'>
                        <p >PHONE</p>
                        <p >832-876-8529</p>
                    </span>
                </div>
                <div className='contact-card-section'>
                    <span className='contact-icon-span'>
                        <BsTelephoneFill size={20}  />
                    </span>
                    <span className='contact-number'>
                        <p >Mobile</p>
                        <p >+1832-876-8529</p>
                    </span>
                </div>
            </div>
        </div>
        <div className='contact-form-main'>
            <div className='constact-form-inner'>
                <p className='contact-us-text'>Contact Us</p>
                <h3 className='hello-text'>Say <span>Hello</span></h3>
                <p className='contact-para'>
                    IF you need a working contact form by PHP script, please visit TemplateMos 
                    contact page for more info.
                </p>
                <input type='text' placeholder='Ful Name' className='contact-input' />
                <input type='text' placeholder='Your Email'className='contact-input' />
                <textarea rows={5} placeholder='Your Message' className='contact-input' />
                <div className='contact-button-div'>
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyLocation