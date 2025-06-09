import React from "react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-24 pb-10">
      <div className="flex-1 px-6 lg:px-0 lg:pr-16 mt-8">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="font-semibold text-black hover:underline">Home</a>
              <span className="mx-2">›</span>
            </li>
            <li className="flex items-center">
              <span>Servizi aggiuntivi</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">PRIVACY</h1>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-start mt-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">PRIVACY</h2>
        <div className="w-full border-t border-gray-200">
          <nav className="flex flex-col divide-y divide-gray-200 mt-2">
            <a
              href="https://www.cdrmonumento.com/ae2131/zf/index.php/servizi-aggiuntivi/index/index/idtesto/14"
              className="py-3 px-4 text-gray-700 hover:bg-gray-50 font-bold"
            >
              INFORMATIVA PRIVACY GENERALE
            </a>
            <a
              href="https://www.cdrmonumento.com/ae2131/zf/index.php/servizi-aggiuntivi/index/index/idtesto/6"
              className="py-3 px-4 text-gray-700 hover:bg-gray-50"
            >
              PRIVACY POLICY
            </a>
            <a
              href="https://www.cdrmonumento.com/ae2131/zf/index.php/servizi-aggiuntivi/index/index/idtesto/7"
              className="py-3 px-4 text-gray-700 hover:bg-gray-50"
            >
              COOKIE POLICY
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
