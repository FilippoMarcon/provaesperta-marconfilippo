export default function Footer({ data }) {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 border-t border-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            {data.title}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-colors duration-500"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className="text-white text-3xl group-hover:text-white/90 transition-colors duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 mb-4">{item.description}</p>

                  <div className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                    {item.isLink ? (
                      <a
                        href={item.href}
                        className="hover:text-blue-600 transition-colors font-medium"
                      >
                        {item.content}
                      </a>
                    ) : (
                      item.content
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-600 font-medium">
                © {data.copyright.year} {data.copyright.company}. Tutti i diritti riservati.
              </p>
              <p className="text-sm text-gray-500 mt-1">{data.copyright.piva}</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {data.badges.map((badge, index) => (
                  <img
                    key={index}
                    src={badge.src}
                    alt={badge.alt}
                    className="h-12 hover:scale-110 transition-transform duration-300 rounded-lg shadow-md hover:shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-100/30 to-indigo-100/30 rounded-full -mr-32 -mb-32 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-100/20 to-purple-100/20 rounded-full -ml-24 -mb-24 animate-float-delay"></div>
    </footer>
  );
}
