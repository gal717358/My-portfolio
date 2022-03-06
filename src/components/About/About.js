import profileImage from '../../images/edvgde.PNG';
import myCv from '../../images/CV_Gal_Buzaglo.pdf';

function About() {
  return (
    <div className='about'>
      <div className='about__container'>
        <img className='about__image' src={profileImage} alt='my-img' />
        <div className='about__text-wrapper'>
          <span className='about__span'>Who i am ---</span>
          <h3 className='about__title'>About Me</h3>
          <p className='about__text'>
            I’m Oluwakemi Adeleke, a professional and talented Product Designer
            with front end development skills. I am passionate about leveraging
            my diverse backgrounds to decipher challenging problems and create
            delightful experiences. I honed my skills at web development,
            technical writing, product design and SEO analytics.
          </p>
          <p className='about__text'>
            I develop websites with HTML, CSS and JavaScript. I have top skills
            in using design softwares like Figma, Adobe XD, Invision and
            PhotoShop; with prototype tools like Framer and Protopie.
          </p>
          <p className='about__text'>
            Being a diligent, hardworking and result oriented lady, I always
            work towards achieving best result on each project I lay my hands
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
