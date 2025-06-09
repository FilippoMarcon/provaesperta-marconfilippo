import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full mx-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900">
          <span className="inline-block hover:scale-105 transition-transform duration-300">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-blue-400 after:to-indigo-600 after:animate-underline">
              Accedi alla Extranet
            </span>
          </span>
        </h2>
        <form className="space-y-8">
          <div>
            <label htmlFor="utente" className="block text-lg font-medium text-gray-700 mb-3">
              Utente
            </label>
            <input
              type="text"
              id="utente"
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
              placeholder="Inserisci il tuo utente"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-3">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
              placeholder="Inserisci la tua password"
            />
          </div>
          <div>
            <label htmlFor="rifPratica" className="block text-lg font-medium text-gray-700 mb-3">
              Rif. pratica
            </label>
            <input
              type="text"
              id="rifPratica"
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
              placeholder="Inserisci il riferimento pratica"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Accedi
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H3a1 1 0 100 2h7.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
