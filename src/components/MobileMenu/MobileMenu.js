import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MobileMenu = (props) => {
  return (
    <div
      className={`mobileMenu ${
        props.isMenuOpen ? 'mobileMenu ' : 'mobileMenu__closed'
      }`}
    >
      <div className='mobileMenu__container'>
        <button className='mobileMenu__button' onClick={props.onclose}>
          <AiOutlineClose
            style={{ color: 'white', height: '26px', width: '26px' }}
          />
        </button>
        <ul className='mobileMenu__list'>
          <li>
            <a className='mobileMenu__link' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='mobileMenu__link' href='#about'>
              About
            </a>
          </li>
          <li>
            <a href='#technologies' className='mobileMenu__link'>
              Technologies
            </a>
          </li>
          <li>
            <a href='#portfolio' className='mobileMenu__link'>
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MobileMenu;
