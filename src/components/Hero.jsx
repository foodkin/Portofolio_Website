import React from 'react';

const Hero = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/Jeferson.jpg`;

  return (
    <section id="home" className="w-full h-screen bg-gray-900 overflow-hidden">
      <div
        className="w-full mx-auto relative bg-cover bg-no-repeat bg-center py-20 h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gradient Overlay Wrapper (supaya nggak overflow) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute md:-top-24 md:-right-32 sm:-right-[7rem] -right-[1rem] top-0 opacity-30 w-[15%] h-[20%] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl"></div>

          <div className="absolute md:-left-[45%] sm:-left-[42%] -left-[40%] opacity-10 w-[50%] h-full my-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
        </div>

        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gray-900/70"></div>

        <div className="w-[80%] mx-auto h-full flex justify-between items-center relative z-10">
          <div className="h-full xl:w-[50%] md:w-[60%] sm:w-[70%] w-full text-white flex flex-col gap-2 justify-center">

            {/* Greeting */}
            <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold text-gray-400">
              Hi, I'm
            </h1>

            {/* Name Gradient */}
            <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Jeferson
            </h1>

            {/* Job Title */}
            <p className="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2 flex items-center text-gray-300">
              <svg
                className="h-6 w-6 fill-current text-blue-500 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              Front-end Developer
            </p>

            {/* Description */}
            <p className="lg:text-xl sm:text-lg text-base text-gray-400 leading-relaxed">
              I create beautiful and functional web applications.
              Passionate about clean code, modern design, and delivering exceptional user experiences.
            </p>

            {/* Buttons */}
            <div className="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2">
              <a
                href="#projects"
                className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold rounded-md bg-blue-600 hover:bg-blue-700 cursor-pointer text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold outline outline-2 outline-gray-700 rounded-md cursor-pointer text-center bg-gray-800 hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
