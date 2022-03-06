import '../../index.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';


function App() {
  return (
    <div className='page'>
      <div className='page__container'>
        <NavBar />
        <Header />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
