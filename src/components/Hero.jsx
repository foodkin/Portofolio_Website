import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          {/* Diagonal SVG Shape */}
          <svg 
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
            fill="currentColor" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              
              {/* Greeting */}
              <h2 className="text-2xl tracking-tight font-bold text-gray-400 sm:text-3xl md:text-4xl mb-4">
                Hi, I'm
              </h2>

              {/* Name */}
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Jeferson
                </span>
              </h1>

              {/* Job Title */}
              <p className="text-xl md:text-2xl font-semibold text-gray-300 mb-4 flex items-center justify-center lg:justify-start">
                <svg className="h-6 w-6 fill-current text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                Front-end Developer
              </p>

              {/* Location */}
              <p className="text-base text-gray-400 mb-8 flex items-center justify-center lg:justify-start">
                <svg className="h-5 w-5 fill-current text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>
                South Tangerang, Banten, ID
              </p>

              {/* Description */}
              <p className="text-base text-gray-400 max-w-xl mb-10 leading-relaxed">
                I create beautiful and functional web applications. Passionate about clean code, modern design, and delivering exceptional user experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-center"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg font-medium hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Contact Me
                </a>
              </div>

            </div>
          </main>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img 
          className="h-56 w-full object-cover object-center sm:h-72 md:h-96 lg:w-full lg:h-full" 
          src="/Jeferson.jpg" 
          alt="Jeferson"
        />
      </div>
    </section>
  );
};

export default Hero;