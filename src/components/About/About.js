import profileImage from '../../images/edvgde.PNG';
import myCv from '../../images/CV_Gal_Buzaglo.pdf';

function About() {
  return (
    <div id='about' className='about'>
      <div className='about__container'>
        <img className='about__image' src={profileImage} alt='my-img' />
        <div className='about__text-wrapper'>
          <span className='about__span'>Who i am ---</span>
          <h3 className='about__title'>About Me</h3>
          <p className='about__text'>
            I’m Gal Buzaglo, a junior full stack web developer with front end
            and back end development skills. I am passionate about leveraging my
            diverse backgrounds to decipher challenging problems and create
            delightful experiences. I honed my skills at web development,
            technical writing and digital marketing.
          </p>
          <p className='about__text'>
            I develop websites with HTML, CSS, JavaScript and ReactJs. I have
            good skills in using those languages and more skills with marketing
            tools.
          </p>
          <p className='about__text'>
            Being a junior, hardworking and result-oriented guy, I always work
            towards achieving the best results on each project I lay my hands
            on.
          </p>
          <a href={myCv} download>
            <button className='header__button'> Download CV </button>{' '}
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
