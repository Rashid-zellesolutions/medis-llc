import React from 'react'
import './Nav.css'
import logo from '../../assets/medis-llc.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = () => {
  return (
    <nav className='menu-bar'
    >
        <div className='logo-div'>
            <img src={logo} alt='logo' />
            <h3>MEDIS LLC</h3>
        </div>
        <div className='menu-links'>
            <div className='menu-items'>
                <h3>
                    <AnchorLink href='#hero'>Home</AnchorLink>
                    
                </h3>
                <h3>
                    <AnchorLink href='#inspire'>About</AnchorLink>
                </h3>
                <h3>
                    <AnchorLink href='#experties'>Experties</AnchorLink>
                </h3>
                <h3>
                    <AnchorLink href='#services'>Services</AnchorLink>
                </h3>
                <h3>
                    <AnchorLink href='#offers'>Offers</AnchorLink>
                </h3>
                <h3>
                    <AnchorLink href='#location'>Contact Us</AnchorLink>
                </h3>
            </div>
        </div>
    </nav>
  )
}

export default Nav
