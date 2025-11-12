const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-600 rounded-full animate-spin"></div>
          
          {/* Inner rotating ring (slower, opposite direction) */}
          <div className="absolute inset-6 border-4 border-transparent border-b-blue-400 border-l-purple-500 rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Loading Text with gradient */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
          Loading
        </h2>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;