import { Menu, X } from 'lucide-react';
import mpLogo from '../assets/mptraining-logo.jpg';

const Navigation = ({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={mpLogo} alt="MP Training Logo" className="h-12 w-auto object-contain" />
            <span className="font-bold font-serif text-xl text-gray-900">MP TRAINING</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'training', 'accomplishments', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize font-medium transition-colors ${
                  activeSection === section
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {section === 'accomplishments' ? 'Success' : section}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'training', 'accomplishments', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize font-medium py-2 text-gray-700 hover:text-blue-600"
                >
                  {section === 'accomplishments' ? 'Success' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;