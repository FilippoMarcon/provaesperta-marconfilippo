import React from "react";

export default function IntranetSitoPage() {
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
              <span>Intranet Sito</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">INTRANET SITO</h1>
        <p className="mb-4">Il centro diurno è un servizio territoriale di tipo semi-residenziale rivolto prevalentemente ad anziani con vario grado di non autosufficienza, con prevalente disturbo cognitivo.<br/>Gli obiettivi del servizio sono:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Sostegno e sollievo ai familiari e alla rete sociale di supporto</li>
          <li>Contrastare fenomeni di isolamento e solitudine</li>
          <li>Potenziare, mantenere e/o compensare abilità e competenze relative alla sfera dell'autonomia, dell'identità e dell'orientamento spazio-temporale, delle relazioni interpersonali e della socializzazione</li>
          <li>Potenziare la rete di servizi per le persone anziane, proponendo interventi personalizzati, con progetti specifici rispondenti ai bisogni dei singoli.</li>
        </ul>
        <p className="mb-2">Le attività del servizio sono:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Assistenza tutelare diurna</li>
          <li>Igiene e cura della persona, con stimolazione delle capacità residue</li>
          <li>Somministrazione di colazione, pranzo e merenda con aiuto nell'alimentazione</li>
          <li>Attività ricreative, culturali, occupazionali, per il mantenimento delle capacità espressive e relazionali, compatibilmente con le condizioni psico-fisiche</li>
          <li>Attività terapeutico riabilitativa-fisioterapica</li>
          <li>Supporto psicologico e sociale sia agli utenti che ai familiari</li>
          <li>Assistenza sanitaria</li>
        </ul>
        <p className="mb-2">Le figure professionali:</p>
        <ul className="list-disc pl-6">
          <li>Coordinatore responsabile</li>
          <li>Infermiere professionale</li>
          <li>Operatore socio-sanitario</li>
          <li>Assistente sociale</li>
          <li>Educatore professionale</li>
          <li>Fisioterapista</li>
          <li>Psicologo</li>
        </ul>
      </div>
    </div>
  );
} 