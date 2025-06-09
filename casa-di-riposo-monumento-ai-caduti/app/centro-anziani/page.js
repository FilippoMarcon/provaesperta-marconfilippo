import React from "react";

export default function CentroAnzianiPage() {
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
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">CENTRO ANZIANI "COLORA IL TUO TEMPO"</h1>
        <p className="mb-4">Il centro anziani è un luogo di incontro rivolto alla popolazione anziana autosufficiente del territorio sandonatese che ha come scopo il contrasto di fenomeni di isolamento e solitudine, portando momenti di stimolo, di benessere e serenità per una maggiore integrazione sociale.
        Il servizio viene svolto grazie da una collaborazione con le associazioni di volontariato presenti nel territorio e con l’Amministrazione Comunale che mette a disposizione gli spazi siti in Viale Libertà n. 10.</p>
      </div>
    </div>
  );
} 