import React from "react";

export default function PuntoPrelieviPage() {
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
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">PUNTO PRELIEVI "PASSARELLA" SERVIZIO INFERMIERISTICO</h1>
        <p className="mb-4">A seguito dell’esigenza di dislocare un “Punto Prelievi” nella Frazione di Passarella (lontana da tutti i servizi) permettendo alla popolazione fragile e anziana residente di accedere ad un servizio sanitario comune, in collaborazione con l’Amministrazione Comunale e con le associazioni di volontariato del territorio, IPAB fornisce una figura professionale di Infermiere per l’espletamento della pratica sanitaria del servizio.</p>
      </div>
    </div>
  );
} 