import { useState } from 'react';
import About from './components/About';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Training from './components/Training';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Training scrollToSection={scrollToSection} />
      <Accomplishments />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;