const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <span className="text-9xl">🚀</span>
                {/* Ganti dengan foto kamu */}
                {/* <img src="/your-photo.jpg" alt="About" className="w-full h-full object-cover" /> */}
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Hello! I'm a passionate developer
            </h3>
            
            <p className="text-gray-400 mb-4 text-lg leading-relaxed">
              I'm a full-stack developer with a passion for creating elegant solutions 
              to complex problems. With experience in modern web technologies, I love 
              bringing ideas to life through code.
            </p>

            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <p className="text-blue-500 font-bold text-2xl mb-1">5+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <p className="text-blue-500 font-bold text-2xl mb-1">50+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <p className="text-blue-500 font-bold text-2xl mb-1">30+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <p className="text-blue-500 font-bold text-2xl mb-1">10+</p>
                <p className="text-gray-400 text-sm">Awards Won</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;