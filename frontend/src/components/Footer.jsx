import mpLogo from '../assets/mptraining-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={mpLogo} alt="MP Training Logo" className="h-8 w-auto" />
            <span className="font-bold font-serif text-lg">MP TRAINING</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 MP Training. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;