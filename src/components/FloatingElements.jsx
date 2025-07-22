import React from 'react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-indigo-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
      
      {/* Floating squares */}
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-blue-500/20 rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-80 right-1/4 w-4 h-4 bg-purple-500/20 rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
    </div>
  );
};

export default FloatingElements;

