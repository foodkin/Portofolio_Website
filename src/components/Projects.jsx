import { useState, useEffect } from 'react';
import websiteProjects from '../data/websiteProjects';
import mobileProjects from '../data/mobileProjects';
import designProjects from '../data/designProjects';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('website');

  // Listen untuk event dari sidebar
  useEffect(() => {
    const handleTabChange = (e) => {
      setActiveTab(e.detail);
    };

    window.addEventListener('changeProjectTab', handleTabChange);

    return () => {
      window.removeEventListener('changeProjectTab', handleTabChange);
    };
  }, []);

  const categories = [
    { id: 'website', name: 'Web Projects', icon: '🌐', count: websiteProjects.length },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱', count: mobileProjects.length },
    { id: 'design', name: 'Design', icon: '🎨', count: designProjects.length }
  ];

  const projects = {
    website: websiteProjects,
    mobile: mobileProjects,
    design: designProjects
  };

  const renderButtons = (project) => {
    // Website Projects - Demo & GitHub
    if (activeTab === 'website') {
      // Kalau ada demo, tampilkan 2 button
      if (project.demo) {
        return (
          <div className="flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all text-sm font-medium"
            >
              View Code
            </a>
          </div>
        );
      }
      
      // Kalau gak ada demo, cuma View Code
      return (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all text-sm font-medium flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Code
        </a>
      );
    }

    // Mobile App Projects - Download APK & GitHub
    if (activeTab === 'mobile') {
      // Kalau ada APK, tampilkan Download + Code
      if (project.apk) {
        return (
          <div className="flex gap-3">
            <a
              href={project.apk}
              download
              className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all text-sm font-medium"
            >
              View Code
            </a>
          </div>
        );
      }
      
      // Kalau gak ada APK, cuma View Code
      return (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all text-sm font-medium flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Code
        </a>
      );
    }

    // Design Projects - Only Figma Link
    if (activeTab === 'design') {
      return (
        <a
          href={project.figma}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          View on Figma
        </a>
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and creativity
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900 rounded-xl p-2 border border-gray-700">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
                  ${activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded-full ml-1">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects[activeTab].map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              style={{
                animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
              }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden group">
                <span className="text-8xl transition-transform duration-300 group-hover:scale-110">{project.image}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                      className="px-3 py-1 bg-gray-800 text-blue-400 text-xs rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dynamic Buttons based on category */}
                {renderButtons(project)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;