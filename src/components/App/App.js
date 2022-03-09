import '../../index.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Technologies from '../Technologies/Technologies';


function App() {
  return (
    <div className='page'>
      <div className='page__container'>
      <NavBar />
        <Header/>
        <About/>
        <Technologies/>
        <Portfolio/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
