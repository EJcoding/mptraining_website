import { ChevronDown } from 'lucide-react';
import mpLogo from '../assets/mptraining-logo.jpg';

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Elevate Your <span className="text-blue-300">Soccer Game</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional soccer training focused on skill development, tactical awareness, and achieving success!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
              >
                Book a Session
              </button>
              <button
                onClick={() => scrollToSection('training')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-200"
              >
                View Training Programs
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={mpLogo}
              alt="MP Training Logo"
              className="w-full max-w-md rounded-2xl shadow-lg border-4 border-white/20 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <ChevronDown 
          className="animate-bounce cursor-pointer" 
          size={32} 
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Home;