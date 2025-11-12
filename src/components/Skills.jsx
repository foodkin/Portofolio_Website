const Skills = () => {
  const skillCategories = [
    {
      title: 'Soft Skills',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600',
      shadow: 'shadow-cyan-500/50',
      skills: [
        'Problem Solving',
        'Analytical Skills',
        'Communication',
        'Teamwork',
        'Public Speaking',
        'Presentation Skills',
        'Adaptability',
        'Team Coordination'
      ]
    },
    {
      title: 'Frontend',
      gradient: 'from-purple-400 via-pink-500 to-pink-600',
      shadow: 'shadow-purple-500/50',
      skills: [
        'React',
        'Bootstrap',
        'Tailwind',
        'Java',
        'JavaScript',
        'Kotlin',
        'CSS',
        'HTML'
      ]
    },
    {
      title: 'Backend & Others',
      gradient: 'from-orange-400 via-red-500 to-red-600',
      shadow: 'shadow-orange-500/50',
      skills: [
        'C#',
        'C',
        'Python',
        'R',
        'Laravel',
        'PHP',
        'MySQL',
        'Figma'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            My Skills
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-2"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-transparent"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills 3D Isometric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="relative group"
              style={{
                animation: `floatUp 0.8s ease-out ${idx * 0.2}s both`
              }}
            >
              {/* 3D Container with isometric effect */}
              <div 
                className="relative"
                style={{
                  transform: 'perspective(1000px) rotateX(10deg) rotateY(-5deg)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(0deg) translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(-5deg)';
                }}
              >
                {/* Main card with 3D depth */}
                <div className={`
                  relative bg-gradient-to-br from-gray-800 to-gray-900
                  rounded-2xl p-8 
                  border border-gray-700
                  ${category.shadow} shadow-2xl
                  transition-all duration-500
                `}>
                  
                  {/* Top edge highlight for 3D effect */}
                  <div className={`
                    absolute -top-1 left-4 right-4 h-1 
                    bg-gradient-to-r ${category.gradient} 
                    rounded-t-2xl opacity-80
                  `}></div>
                  
                  {/* Left edge for 3D depth */}
                  <div className={`
                    absolute -left-1 top-4 bottom-4 w-1 
                    bg-gradient-to-b ${category.gradient} 
                    rounded-l-2xl opacity-60
                  `}></div>

                  {/* Category Header */}
                  <div className="relative mb-8">
                    <div className={`
                      inline-block relative
                      before:absolute before:inset-0 
                      before:bg-gradient-to-r before:${category.gradient}
                      before:blur-xl before:opacity-50
                    `}>
                      <div className={`
                        relative px-6 py-3 
                        bg-gradient-to-r ${category.gradient}
                        rounded-xl
                        ${category.shadow} shadow-xl
                        transform -skew-x-6
                      `}>
                        <h3 className="text-2xl font-bold text-white transform skew-x-6">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-gray-400">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mr-2 animate-pulse`}></div>
                      <span className="text-sm font-medium">{category.skills.length} Skills</span>
                    </div>
                  </div>

                  {/* Skills Grid with staggered 3D cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="group/skill relative"
                        style={{
                          animation: `slideIn 0.5s ease-out ${(idx * 0.2) + (skillIdx * 0.05)}s both`,
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {/* 3D Skill Card */}
                        <div className="relative">
                          {/* Card shadow/depth layer */}
                          <div className={`
                            absolute inset-0 
                            bg-gradient-to-br ${category.gradient}
                            rounded-lg opacity-0 group-hover/skill:opacity-20
                            blur-md
                            transition-all duration-300
                            transform translate-y-1 translate-x-1
                          `}></div>
                          
                          {/* Main card */}
                          <div className={`
                            relative
                            bg-gradient-to-br from-gray-700/50 to-gray-800/50
                            backdrop-blur-sm
                            border border-gray-600/50
                            rounded-lg p-3
                            transition-all duration-300
                            group-hover/skill:border-gray-500
                            group-hover/skill:transform 
                            group-hover/skill:-translate-y-1
                            group-hover/skill:shadow-lg
                            group-hover/skill:${category.shadow}
                            cursor-default
                          `}>
                            {/* Top highlight */}
                            <div className={`
                              absolute top-0 left-1/4 right-1/4 h-px
                              bg-gradient-to-r ${category.gradient}
                              opacity-0 group-hover/skill:opacity-100
                              transition-opacity duration-300
                            `}></div>
                            
                            {/* Skill text */}
                            <p className="text-gray-200 text-sm font-semibold text-center relative z-10">
                              {skill}
                            </p>

                            {/* Shine effect */}
                            <div className="
                              absolute inset-0 rounded-lg overflow-hidden
                              opacity-0 group-hover/skill:opacity-100
                              transition-opacity duration-500
                            ">
                              <div className={`
                                absolute inset-0 
                                bg-gradient-to-r from-transparent via-white to-transparent 
                                opacity-20
                                -translate-x-full group-hover/skill:translate-x-full
                                transition-transform duration-1000
                              `}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom glow */}
                  <div className={`
                    absolute -bottom-4 left-1/2 -translate-x-1/2
                    w-3/4 h-8
                    bg-gradient-to-r ${category.gradient}
                    blur-2xl opacity-20
                    group-hover:opacity-40
                    transition-opacity duration-500
                  `}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatUp {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(10deg) rotateY(-5deg) translateY(50px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(10deg) rotateY(-5deg) translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;