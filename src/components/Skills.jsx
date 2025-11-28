import React from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = React.useState('tech');

  const skills = [
    {
      name: 'HTML5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g>
        </svg>
      )
    },
    {
      name: 'CSS3',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#0277BD" rx="60"/><path fill="#EBEBEB" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#F0DB4F" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g>
        </svg>
      )
    },
    {
      name: 'React',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00D8FF" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"/><path stroke="#00D8FF" stroke-width="8.911" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clip-rule="evenodd"/><path stroke="#00D8FF" stroke-width="8.911" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clip-rule="evenodd"/><path stroke="#00D8FF" stroke-width="8.911" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clip-rule="evenodd"/></g>
        </svg>
      )
    },
    {
      name: 'Bootstrap',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#7952B3" d="M131.97 196h-40.94A12.04 12.04 0 0 1 79 183.97v-111.94A12.04 12.04 0 0 1 91.03 60h37.75c13.93 0 25.12 3.2 33.58 9.6c8.45 6.4 12.68 15.55 12.68 27.45c0 6.79-1.97 13.03-5.9 18.72s-9.58 9.79-16.96 12.38c8.8 2.1 15.73 6.52 20.78 13.26c5.05 6.75 7.58 14.61 7.58 23.59c0 12.64-4.52 22.58-13.55 29.81c-9.04 7.24-21.48 10.86-37.32 10.86zm-4.52-94.8h-22.24v31.1h22.24c6.27 0 11.24-1.52 14.9-4.55s5.49-7.5 5.49-13.42c0-5.57-1.83-9.63-5.49-12.19c-3.66-2.55-8.63-3.83-14.9-3.83zm2.68 50.12h-24.92v32.98h24.92c6.62 0 11.85-1.6 15.67-4.79c3.83-3.2 5.74-7.8 5.74-13.81c0-5.78-1.91-10.17-5.74-13.16c-3.82-3-9.05-4.5-15.67-4.5z"/></g>
        </svg>
      )
    },
    {
      name: 'Tailwind',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#a)" fillRule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clipRule="evenodd"/><defs><linearGradient id="a" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stopColor="#32B1C1"/><stop offset="1" stopColor="#14C6B7"/></linearGradient></defs></g>
        </svg>
      )
    },
    {
      name: 'Kotlin',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <defs><linearGradient id="a" x1="26.599" x2="135.4" y1="146.559" y2="146.559" gradientUnits="userSpaceOnUse"><stop offset="0.003" stopColor="#e44857"/><stop offset="0.469" stopColor="#c711e1"/><stop offset="1" stopColor="#7f52ff"/></linearGradient><linearGradient id="b" x1="26.599" x2="135.4" y1="241.11" y2="241.11" gradientUnits="userSpaceOnUse"><stop offset="0.003" stopColor="#e44857"/><stop offset="0.469" stopColor="#c711e1"/><stop offset="1" stopColor="#7f52ff"/></linearGradient><linearGradient id="c" x1="121.085" x2="229.886" y1="135.94" y2="135.94" gradientUnits="userSpaceOnUse"><stop offset="0.003" stopColor="#e44857"/><stop offset="0.469" stopColor="#c711e1"/><stop offset="1" stopColor="#7f52ff"/></linearGradient></defs><path fill="url(#a)" d="M135.4 26.599L26.599 135.4V26.599Z"/><path fill="url(#b)" d="M26.599 135.4L135.4 246.201V135.4Z"/><path fill="url(#c)" d="M135.4 135.4L229.886 26.599H135.4Z"/><path fill="url(#b)" d="M135.4 135.4L26.599 246.201h108.801Z"/><path fill="url(#c)" d="M135.4 135.4l94.486 110.801V135.4Z"/></svg>
      )
    },
    {
      name: 'PHP',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#777BB3" d="M128 28.12C66.148 28.12 16 59.956 16 99.428s50.148 71.308 112 71.308s112-31.836 112-71.308S189.852 28.12 128 28.12m-5.68 90.428c-1.456 7.28-4.368 12.688-8.736 16.224c-4.224 3.392-10.336 5.088-18.048 5.088h-10.08l5.088-27.216h8.736c5.52 0 9.6.896 12.096 2.688c2.64 1.792 3.504 5.088 2.944 9.888zm37.872-17.808l-2.784 14.56h8.736c5.952 0 10.048-.896 12.096-2.688c2.208-1.792 3.648-5.088 4.368-9.888c.864-4.8.432-8.096-1.296-9.888s-5.088-2.688-10.08-2.688h-9.6zm52.992 13.552c-1.296 6.72-3.648 12.032-6.912 15.712c-3.264 3.68-7.104 6.368-11.52 7.712s-9.6 2.256-15.408 2.256h-10.08l-3.648 18.992h-17.28l12.096-63.84h27.36c6.048 0 10.896.896 14.56 2.688c3.792 1.792 6.336 4.48 7.776 8.096c1.44 3.616 1.728 7.712 1.056 12.384m-51.744 0c-1.296 6.72-3.648 12.032-6.912 15.712c-3.264 3.68-7.104 6.368-11.52 7.712s-9.6 2.256-15.408 2.256h-10.08l-3.648 18.992H96.592l12.096-63.84h27.36c6.048 0 10.896.896 14.56 2.688c3.792 1.792 6.336 4.48 7.776 8.096c1.44 3.616 1.728 7.712 1.056 12.384m-74.832-28.56H69.328l-12.096 63.84h17.28l3.648-18.992h10.08c5.808 0 11.088-.752 15.408-2.256s7.968-4.032 11.232-7.712c3.264-3.68 5.616-9.024 6.912-15.712c.672-4.8.384-8.736-1.056-12.384c-1.44-3.648-3.984-6.304-7.776-8.096c-3.6-1.792-8.448-2.688-14.496-2.688"/></g>
        </svg>
      )
    },
    {
      name: 'Laravel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#FF2D20" fillRule="evenodd" d="M215.846 78.314q.097.366.098.747v39.199c0 .503-.131.997-.379 1.432a2.84 2.84 0 0 1-1.037 1.047l-32.446 18.942v37.545a2.87 2.87 0 0 1-1.409 2.48l-67.728 39.535c-.155.089-.324.146-.493.207c-.064.022-.123.061-.19.079a2.8 2.8 0 0 1-1.445 0c-.077-.022-.148-.065-.222-.093c-.155-.057-.317-.107-.465-.193l-67.714-39.535a2.85 2.85 0 0 1-1.036-1.047a2.9 2.9 0 0 1-.38-1.433V59.629q.002-.387.099-.75c.02-.083.07-.158.098-.24c.053-.15.102-.303.18-.443c.053-.093.13-.168.194-.253c.08-.115.155-.233.25-.333c.08-.082.187-.143.278-.214c.102-.086.194-.179.31-.247h.004L76.27 37.382a2.8 2.8 0 0 1 2.819 0l33.859 19.767h.007c.112.072.208.161.31.243c.091.072.193.136.274.215c.099.103.17.221.254.336c.06.085.141.16.19.253c.081.143.127.293.184.443c.028.082.077.157.098.243q.097.367.099.747v73.45l28.214-16.473v-37.55c0-.25.035-.503.099-.742c.025-.086.07-.161.099-.243c.056-.15.105-.304.183-.443c.053-.093.13-.168.19-.254c.085-.114.155-.232.254-.332c.081-.082.183-.143.275-.215c.105-.085.197-.178.31-.246h.004l33.862-19.768a2.79 2.79 0 0 1 2.818 0l33.859 19.768c.12.072.211.16.317.243c.088.071.19.136.271.214c.099.104.169.222.254.336c.063.086.141.16.19.254c.081.14.127.293.183.443c.032.082.078.157.099.243m-5.546 38.292V84.009l-11.849 6.916l-16.369 9.557v32.597l28.221-16.473zm-33.859 58.966v-32.618l-16.101 9.325l-45.979 26.609v32.925zM46.644 64.577v110.995l62.073 36.238v-32.919l-32.428-18.61l-.01-.007l-.015-.007c-.109-.064-.2-.157-.303-.236c-.088-.071-.19-.128-.267-.207l-.007-.01c-.092-.09-.156-.2-.233-.301c-.07-.096-.155-.178-.211-.278l-.004-.011c-.064-.107-.103-.236-.148-.357c-.046-.107-.106-.207-.134-.322v-.004c-.035-.135-.042-.278-.057-.418c-.014-.107-.042-.214-.042-.321V81.051L58.493 71.49l-11.849-6.91zm31.04-21.415L49.474 59.63l28.203 16.466l28.207-16.47l-28.207-16.463zm14.671 102.764l16.366-9.553V64.577l-11.85 6.917l-16.368 9.556v71.797zm86.909-83.332l-28.208 16.467l28.208 16.466l28.203-16.47zm-2.823 37.888l-16.369-9.557l-11.848-6.916v32.597l16.365 9.553l11.852 6.92zm-64.905 73.458l41.373-23.952l20.682-11.968l-28.186-16.456l-32.453 18.946l-29.578 17.267z" clipRule="evenodd"/></g>
        </svg>
      )
    },
    {
      name: 'Figma',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><g clipPath="url(#a)"><path fill="#0ACF83" d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"/><path fill="#A259FF" d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"/><path fill="#F24E1E" d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"/><path fill="#FF7262" d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"/><path fill="#1ABCFE" d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"/></g><defs><clipPath id="a"><path fill="#fff" d="M61 28h133.36v200H61z"/></clipPath></defs></g>
        </svg>
      )
    },
    {
      name: 'XAMPP',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#FB7A24" d="M128 28c-55.228 0-100 44.772-100 100s44.772 100 100 100s100-44.772 100-100S183.228 28 128 28m0 180c-44.183 0-80-35.817-80-80s35.817-80 80-80s80 35.817 80 80s-35.817 80-80 80"/><path fill="#FB7A24" d="M95.5 95.5L128 128l32.5-32.5l-32.5-32.5zm0 65L128 128l-32.5-32.5l32.5 32.5zm65 0L128 128l32.5 32.5l-32.5-32.5zm0-65L128 128l32.5-32.5L128 128z"/></g>
        </svg>
      )
    }
  ];

  const softSkills = [
    'Problem Solving',
    'Analytical Skills',
    'Communication',
    'Teamwork',
    'Public Speaking',
    'Presentation Skills',
    'Adaptability',
    'Team Coordination'
  ];

  return (
    <section id="skills" className="min-h-screen w-full py-20 md:px-8 xl:px-20 text-white bg-gray-900 flex items-center relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center center'
        }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full relative z-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            {/* Vertical Text */}
            <div className="absolute -left-4 top-16 sm:left-16 sm:top-20 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>All Skills</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Expertise & Tech Stack
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex gap-2 mb-6 px-6">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'tech'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Tech Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'soft'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Soft Skills
            </button>
          </div>

          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            {activeTab === 'tech'
              ? 'These are the tools and technologies that I use daily to develop web applications. With a strong foundation in frontend, I focus on delivering clean, maintainable code and intuitive user experiences.'
              : 'These soft skills complement my technical abilities, enabling me to work effectively in teams, communicate ideas clearly, and adapt to new challenges in dynamic environments.'}
          </p>
        </div>

        {/* Right Side (Skills Grid) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {activeTab === 'tech' ? (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-center transition-all duration-300 hover:bg-gray-700 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2">
                    <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </span>
                    <p className="text-xs mt-2 text-gray-300">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;