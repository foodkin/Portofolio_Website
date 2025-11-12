const TopNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex items-center space-x-4">
        {/* Tombol Hamburger untuk Toggle Sidebar */}
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-lg transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-white text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-400 hidden sm:block">Welcome</span>
        <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          J
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;