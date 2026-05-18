import React, { useState, useEffect } from 'react';

const Hero = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/Jeferson.jpg`;
  const currentYear = new Date().getFullYear();
  const years = [currentYear - 2, currentYear - 1, currentYear, currentYear + 1, currentYear + 2];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="w-full h-screen bg-gray-900 overflow-hidden">
      <div
        className="w-full mx-auto relative bg-cover bg-no-repeat bg-center h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-32 opacity-30 w-[15%] h-[20%] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl" />
          <div className="absolute -left-[45%] opacity-10 w-[50%] h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/70" />

        {/* Full-height year ticker — bare numbers, right side */}
        <div className="hidden lg:flex absolute right-0 top-0 h-full flex-col items-end justify-between py-10 pr-10 z-10 pointer-events-none">
          {years.map((year, i) => {
            const isActive = year === currentYear;
            const activeIndex = years.indexOf(currentYear);
            const distance = Math.abs(i - activeIndex);
            const opacity = isActive ? 1 : Math.max(0.08, 0.4 - distance * 0.13);

            return (
              <div
                key={year}
                style={{
                  opacity: mounted ? opacity : 0,
                  transform: mounted ? 'translateX(0)' : 'translateX(50px)',
                  transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {isActive && (
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: 10,
                      letterSpacing: '0.3em',
                      color: '#3b82f6',
                      marginBottom: 6,
                      opacity: mounted ? 1 : 0,
                      transition: 'opacity 0.5s ease 0.7s',
                      textTransform: 'uppercase',
                    }}
                  >
                    now
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: isActive ? 'clamp(56px, 7.5vw, 104px)' : 'clamp(24px, 3vw, 44px)',
                    fontWeight: isActive ? 700 : 300,
                    color: isActive ? '#ffffff' : '#1e3a5f',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  {year}
                </span>
              </div>
            );
          })}
        </div>

        {/* Text content */}
        <div className="relative z-10 w-[80%] mx-auto h-full flex items-center">
          <div className="xl:w-[50%] md:w-[60%] sm:w-[70%] w-full text-white flex flex-col gap-2">
            <p className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold text-gray-400">
              Hi, I'm
            </p>
            <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Jeferson
            </h2>
            <h1 className="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2 flex items-center text-gray-300">
              <svg className="h-6 w-6 fill-current text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              Frontend Developer
            </h1>
            <p className="lg:text-xl sm:text-lg text-base text-gray-400 leading-relaxed">
              I create beautiful and functional web applications.
              Passionate about clean code, modern design, and delivering exceptional user experiences
              through modern frontend technologies like React and responsive UI development.
            </p>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;