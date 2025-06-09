import React from "react";

export default function ServizioAssistenzaPage() {
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
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">SERVIZIO ASSISTENZA DOMICILIARE S.A.D.</h1>
        <p className="mb-4">Il servizio di Assistenza Domiciliare è un servizio sociale territoriale rivolto ai singoli o a nuclei familiari in difficoltà che, per specifiche esigenze di ordine socio-assistenziali permanenti o temporanee, hanno necessità di aiuto a domicilio, sostegno e collaborazione per attività relative alla cura della persona, al governo della casa, alla vita di relazione e al superamento di difficoltà organizzative familiari.</p>
        <p className="mb-2 font-semibold">Obiettivi:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Mantenimento, inserimento e reinserimento delle persone in stato di bisogno nell’ambiente familiare e sociale di appartenenza</li>
          <li>Promozione e recupero delle capacità di autonomia delle persone attraverso le risorse personali, familiari, amicali e di vicinato presenti nel territorio</li>
          <li>Contrasto dei processi di emarginazione sociale, isolamento e solitudine</li>
        </ul>
        <p className="mb-2">Attraverso il SAD, inoltre, si intende:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Favorire la creazione di legami significativi e relazioni sociali e supportare la rete sociale esistente attraverso la programmazione di un insieme di servizi e prestazioni a tutela della persona fragile</li>
          <li>Promuovere una comunità sempre più responsabile verso le persone e le situazioni familiari più fragili</li>
          <li>Sviluppare servizi e interventi avviati in tema di promozione della domiciliarità e del lavoro di comunità</li>
        </ul>
        <p className="mb-4">L’IPAB collabora con il servizio sociale dell’Amministrazione Comunale nell’erogazione di questo servizio per il mantenere il più a lungo possibile l’anziano nel suo “mondo” di appartenenza, evitandone l’istituzionalizzazione prima del tempo necessario.</p>
      </div>
    </div>
  );
}