import React from 'react'
import logo from '../../images/gb__2_-removebg-preview.png';
import linkedIn from '../../images/linkedin.svg';
import Whatsapp from '../../images/whatsapp.svg';
import gitHub from '../../images/GitHub-Mark-Light-32px.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__container'>
        <a href="#home"><img className='footer__logo' src={logo} alt="footer-logo" /></a>
            <p className='footer__copyright'>© Copyright 2022. All right reserved</p>
            <div className='footer__social-icons'>
                <a href="https://www.linkedin.com/in/gal-buzaglo/" target="_blank" rel="noopener noreferrer"><img className='footer__icon' src={linkedIn} alt="linkedIn" /></a>
                <a href="https://github.com/gal717358" target="_blank" rel="noopener noreferrer"><img className='footer__icon' src={gitHub} alt="Git" target="_blank"/></a>
                <a href="https://wa.link/4wwc93" target="_blank" rel="noopener noreferrer"><img className='footer__icon' src={Whatsapp} alt="Whatsapp" target="_blank"/></a>
                </div>
            </div>
        </div>
  )
}

export default Footer