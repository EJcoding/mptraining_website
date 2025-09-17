import cheloHeadshot from '../assets/chelo-headshot.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-96 h-96 mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={cheloHeadshot}
                alt="Coach Marcelo"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Coach Marcelo</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                My soccer journey spans over 15+ years where I'm currently a semi-professional player for Foro Sports Club. With roughly 2 years of dedicated coaching experience, I've had the privilege of developing players from recreational level to collegiate commitments.
              </p>
              <p>
                My coaching philosophy centers on personalized development, tactical intelligence, and mental resilience. Every player is unique, and I tailor my training approach to unlock each individual's potential while building the confidence needed to excel at higher levels.
              </p>
              <p>
                Whether you're looking to make your high school varsity team, earn a college scholarship, or simply improve your soccer skills, I'm here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;