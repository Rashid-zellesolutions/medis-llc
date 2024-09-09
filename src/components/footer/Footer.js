import React from 'react';
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Assigning unique keys using an object with a name or id could also help
  const socialIcons = [
    { icon: <FaFacebookF size={20} className='text-white' />, name: 'facebook' },
    { icon: <FaSquareXTwitter size={20} className='text-white' />, name: 'twitter' },
    { icon: <RiLinkedinLine size={20} className='text-white' />, name: 'linkedin' },
    { icon: <FaInstagram size={20} className='text-white' />, name: 'instagram' }
  ];

  return (
    <div className='footer-main-div'>
      <div className='footer-socal-icons'>
        {socialIcons.map((item, index) => (
          <button
            key={item.name} // Using name as a unique key prop
            className='footer-icon-btn'
          >
            {item.icon}
          </button>
        ))}
      </div>
      <div className='rights-reserved-div'>
        <button className='text-sm font-bold text-black'>
          All Rights Reserved To Medis llc
        </button>
      </div>
    </div>
  );
};

export default Footer;
