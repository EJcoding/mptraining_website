import { Target, Users, ChevronDown } from 'lucide-react';
import training1 from '../assets/training1.jpg';
import training2 from '../assets/training2.jpg';
import training3 from '../assets/training3.jpg';
import training4 from '../assets/training4.jpg';

const Training = ({ scrollToSection }) => {
  return (
    <section id="training" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Program</h2>
          <p className="text-xl text-gray-600">Customized training solutions for every player's journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Target size={64} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1-on-1 Personal Training</h3>
              <p className="text-gray-600 mb-4">
                Individualized sessions focusing on your specific needs, weaknesses, and goals. Perfect for rapid skill development.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Technical skill development</li>
                <li>• Tactical awareness training</li>
                <li>• Personalized feedback</li>
                <li>• Video/film breakdown</li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-blue-600">$65/session</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <Users size={64} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Training</h3>
              <p className="text-gray-600 mb-4">
                Train with 3-5 players of similar skill level. Great for competitive development and team chemistry.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Group dynamics training</li>
                <li>• Competitive drills</li>
                <li>• Team communication</li>
                <li>• Cost-effective option</li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-green-600">$35/player</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <Users size={64} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bring a Friend Training</h3>
              <p className="text-gray-600 mb-4">
                Push yourself and a friend by overcoming challenges together. Ideal for motivation and shared progress.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Partner training</li>
                <li>• Competitive drills</li>
                <li>• Chemistry building</li>
                <li>• Cost-effective option</li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-purple-600">$45/player</div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Training in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={training1} 
                alt="Training Session 1" 
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={training2} 
                alt="Training Session 2" 
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={training3} 
                alt="Training Session 3" 
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={training4} 
                alt="Training Session 4" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4 mb-8">Follow @_mp_training_ on socials for the latest training videos and tips!</p>
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <ChevronDown 
          className="animate-bounce cursor-pointer" 
          size={32} 
          onClick={() => scrollToSection('contact')}
        />
      </div>
    </section>
  );
};

export default Training;