import myPhoto from '../../images/myPhoto.png';
import hiIcon from '../../images/emoji.svg';
import meIcon from '../../images/man-technologist.png';

function Header() {
  return (
    <div id='home' className='header'>
      <div className='header__container'>
        <div className='header__text-wrapper'>
          <p className='header__intro'>
            HI THERE <img src={hiIcon} alt='hi-icon' /> I'M
          </p>
          <h1 className='header__name'>Gal Buzaglo</h1>
          <h3 className='header__job'>FULL STACK WEB DEVELOPER <img className='header__icon' src={meIcon} alt='me-icon' /></h3>
          <p className='header__description'>
            I’m a junior full stack developer looking for my first position,
            based in Tel Aviv.
          </p>
          <a href='/' download> <button className='header__button'> Hire Me </button> </a>
        </div>
        <img className='header__image' src={myPhoto} alt='myPhoto' />
      </div>
    </div>
  );
}

export default Header;
