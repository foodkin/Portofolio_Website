const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A modern online shopping platform with cart, payment integration, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team features.',
      image: '✅',
      tags: ['React', 'Firebase', 'Tailwind'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather forecast app with location-based data and detailed metrics.',
      image: '🌤️',
      tags: ['React', 'API', 'CSS'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills with modern design.',
      image: '💼',
      tags: ['React', 'Tailwind', 'Three.js'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with group chats and file sharing capabilities.',
      image: '💬',
      tags: ['React', 'Socket.io', 'Node.js'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Full-featured blogging platform with markdown support and comments.',
      image: '📝',
      tags: ['React', 'Express', 'MySQL'],
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <span className="text-8xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-gray-700 text-blue-400 text-xs rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;