import { Star } from 'lucide-react';

const Accomplishments = () => {
  return (
    <section id="accomplishments" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">MP Brings Success!</h2>
          <p className="text-xl text-gray-600">Celebrating achievements both personal and professional</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Coach Achievements</h3>
            <div className="space-y-4">
              {[
                { year: '2024 - Present', achievement: 'Semi-Pro Player for Foro Sports Club' },
                { year: '2019 - 2023', achievement: '4-year Varsity Starter' },
                { year: '2022 - 2023', achievement: 'First Team All-District (FISD)' },
                { year: '2017 - 2022', achievement: 'Played for FC Dallas' },
                { year: '2010 - 2017', achievement: 'Played for Monterrey Mexico' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.year}
                  </div>
                  <div className="font-medium text-gray-900">{item.achievement}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Success</h3>
            <div className="space-y-6">
              {[
                { 
                  name: 'Student 1', 
                  achievement: 'Division I Scholarship - College/University',
                  quote: 'MP Training helped me develop the technical skills and confidence I needed to compete at the highest level.'
                },
                { 
                  name: 'Student 2', 
                  achievement: 'Varsity Team Captain - High School',
                  quote: 'The personalized training approach made all the difference in my game development.'
                },
                { 
                  name: 'Student 3', 
                  achievement: 'Midfielder - Little League',
                  quote: 'Coach Marcelo’s sessions were fun and challenging, pushing me to improve every week.'
                }
              ].map((student, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    <div className="font-bold text-gray-900">{student.name}</div>
                  </div>
                  <div className="text-blue-600 font-medium mb-2">{student.achievement}</div>
                  <p className="text-gray-600 italic">"{student.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;