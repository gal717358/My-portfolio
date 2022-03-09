import React from 'react';
import {
  DiJavascript,
  DiReact,
  DiCss3,
  DiHtml5,
  DiNodejs,
} from 'react-icons/di';

function Technologies() {
  return (
    <div id='technologies' className='technologies'>
      <div className='technologies__container'>
        <span className='technologies__span'>Technologies ---</span>
        <ul className='technologies__wrapper'>
          <li className='technologies__block'>
            <DiHtml5 className='icon' />
            <p>HTML </p>
          </li>
          <li className='technologies__block'>
            <DiCss3 className='icon' />
            <p>CSS </p>
          </li>
          <li className='technologies__block'>
            <DiJavascript className='icon' />
            <p>JavaScript</p>
          </li>
          <li className='technologies__block'>
            <DiReact className='icon' />
            <p>ReactJs </p>
          </li>
          <li className='technologies__block'>
            <DiNodejs className='icon' />
            <p>NodeJs </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Technologies;
