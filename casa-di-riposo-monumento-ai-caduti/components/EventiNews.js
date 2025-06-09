"use client";

export default function EventiNews({ title, content, showAllLink }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"></div>
        <div className="relative px-8 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl lg:text-3xl font-bold text-white flex items-center">
              <div className="w-2 h-8 bg-white rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
              {title}
            </h2>
            <div className="hidden lg:flex items-center space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed text-base lg:text-lg">
            {content}
          </div>
        </div>
        
        {showAllLink && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="mr-2">Continua a leggere</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        )}
      </div>

    </div>
  );
}