import '../../index.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Technologies from '../Technologies/Technologies';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <div className='page'>
      <div className='page__container'>
        <NavBar
          onMobileMenuClick={handleMobileMenu}
          isMenuOpen={isMobileOpen}
        />
        <MobileMenu isMenuOpen={isMobileOpen} onclose={closeMobileMenu} />
        <Header />
        <About />
        <Technologies />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
