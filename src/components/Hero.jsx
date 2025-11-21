const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img src="/Jeferson.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Jeferson</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Front-end Developer
          </p>

          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-12">
            I create beautiful and functional web applications. Passionate about clean code and user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg font-medium hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;