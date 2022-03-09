import React from 'react';
import logo from '../../images/gb__2_-removebg-preview.png';
function NavBar() {
  return (
    <div className='navBar'>
      <div className='navBar__container'>
      <a href="#home"><img className='navBar__logo' src={logo} alt='logo' /></a>
        <ul className='navBar__nav'>
          <li>
            <a className='navBar__link' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='navBar__link' href='#about'>
              About
            </a>
          </li>
          <li>
            <a href='#technologies' className='navBar__link'>
              Technologies
            </a>
          </li>
          <li>
            <a href='#portfolio' className='navBar__link'>
              Portfolio
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default NavBar;
