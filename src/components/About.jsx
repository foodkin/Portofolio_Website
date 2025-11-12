const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center Content Container */}
        <div className="flex flex-col justify-center items-center">
          {/* Section Title */}
          <h2 className="text-3xl lg:text-4xl font-semibold leading-10 text-center text-white mb-8 md:mb-10 md:w-9/12 lg:w-7/12">
            About Me
          </h2>

          {/* Description */}
          <p className="text-base lg:text-lg leading-relaxed text-center text-gray-400 md:w-9/12 lg:w-7/12 mb-10 md:mb-14">
            I'm a full-stack developer with a passion for creating elegant solutions 
            to complex problems. With experience in modern web technologies, I love 
            bringing ideas to life through code. When I'm not coding, you can find me 
            exploring new technologies, contributing to open-source projects, or sharing 
            knowledge with the developer community.
          </p>

          {/* Stats Cards */}
          <div className="w-full md:w-9/12 lg:w-7/12 grid grid-cols-2 gap-6 mb-12 md:mb-14">
            {/* Years Experience */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <p className="text-blue-500 font-bold text-4xl md:text-5xl mb-2 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                3+
              </p>
              <p className="text-gray-400 text-sm md:text-base text-center">Years Experience</p>
            </div>

            {/* Projects Completed */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <p className="text-purple-500 font-bold text-4xl md:text-5xl mb-2 text-center bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                5
              </p>
              <p className="text-gray-400 text-sm md:text-base text-center">Projects Completed</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center">
            <a
              href="#contact"
              className="w-full sm:w-auto border border-gray-700 text-base font-medium text-gray-300 py-5 px-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 text-center"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;