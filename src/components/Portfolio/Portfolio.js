import aroundUs from '../../images/around-us.jpg';
import newsExplorer from '../../images/news-explorer.png';
import toysland from '../../images/toysland.PNG';
import zviaDover from '../../images/zvia-dover.PNG';
import neptuneFruit from '../../images/neptune-fruit.PNG';
import portToPott from '../../images/portland-to-portland.jpg';

function Portfolio() {
  return (
    <div id="portfolio" className='portfolio'>
      <div className='portfolio__container'>
        <div className='portfolio__wrapper'>
          <span id="portfolio" className='portfolio__span'>My Projects ---</span>
          <h3 className='portfolio__title'>My Portfolio</h3>
        </div>
        <div className='portfolio__cards'>
          <a
            href='https://gal717358.students.nomoreparties.site/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='portfolio__card' src={aroundUs} alt='aroundUs' />{' '}
          </a>
          <a
            href='https://www.gal.buzaglo.students.nomoreparties.sbs/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='portfolio__card'
              src={newsExplorer}
              alt='newsExplorer'
            />
          </a>
          <a
            href='https://gal717358.github.io/web_project_3/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='portfolio__card'
              src={portToPott}
              alt='portToPott'
            />
          </a>
          <a
            href='https://neptune-fruit.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='portfolio__card'
              src={neptuneFruit}
              alt='neptuneFruit'
              style={{ objectPosition: 'left' }}
            />
          </a>
          <a
            href='https://toysland.co.il/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='portfolio__card'
              src={toysland}
              alt='toysland'
            />{' '}
          </a>
          <a
            href='https://zviadover.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
          <img className='portfolio__card' src={zviaDover} alt='zviaDover' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
