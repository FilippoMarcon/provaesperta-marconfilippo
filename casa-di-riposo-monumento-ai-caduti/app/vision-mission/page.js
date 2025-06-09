import React from "react";

export default function VisionMissionPage() {
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
              <span>Vision e Mission</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">VISION E MISSION</h1>
        
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">LA NASCITA DELL’IPAB</h2>
        <p className="mb-4">La Casa di Riposo “Monumento ai Caduti in Guerra” è stata istituita nel 1925 ed eretta come Ente Morale con autonoma amministrazione sulla base del Regio Decreto del 29 Ottobre 1936.
        L’ente è un I.P.A.B. (Istituzione Pubblica di Assistenza e Beneficienza) disciplinata dalla Legge Crispi del 1890 e dal D.Lgs 4/5/01 m. 207 ed ha quindi natura giuridica pubblica.</p>
        <p className="mb-4">Tra i gestori dell’amministrazione Comunale del dopoguerra, si formò un comitato pro “Monumento ai Caduti in Guerra 1915-1918” per erigere un monumento dove poter piangere i propri morti, essendo loro stessi appartenuti ad un territorio coinvolto nel conflitto, e per i quali la realizzazione del monumento aveva profonda importanza.</p>
        <p className="mb-4">A seguito della legge del 1917 che prevedeva e favoriva la nascita di organizzazioni con finalità di assistenza alle famiglie di caduti in guerra, nasce a San Donà “L’associazione tra le madri e vedove dei Caduti”, la quale contribuisce a divulgare la volontà della costruzione di un Monumento.</p>
        <p className="mb-4">Solo però nel 1925, durante un consiglio di Giunta Comunale, venne proposta l’idea della casa di ricovero, nella quale riunire tutte quelle istituzioni come l’asilo, l’orfanotrofio, la casa di riposo, … ecc. L’idea venne votata all’unanimità decidendo così che il “Monumento ai Caduti” sarebbe stata una casa di ricovero.</p>
        <p className="mb-4">San Donà divenne l’unico paese ad erigere un monumento dedicato ai caduti con insita un’opera residenziale per gli anziani e gli invalidi di guerra.</p>
        <p className="mb-4">Il monumento verrà inaugurato nel 1930, ma l’operatività partirà a regime nel 1932 e verrà riconosciuta ufficialmente il 29 ottobre del 1936 con Regio Decreto emanato da Re Vittorio Emanuele e da Mussolini, inserito in Gazzetta Ufficiale il 7 dicembre 1936.</p>
        <p className="mb-4">La casa di riposo che oggi è Ente Pubblico, si formò con fondi di beneficienza provenienti da privati ed, inizialmente, per il suo funzionamento venne gestita sempre con parte di fondi privati. Molti sono i soggetti che con il volontariato hanno portato avanti il funzionamento della struttura, testimonianza che il monumento è nato dalla volontà dei cittadini sandonatesi.</p>

        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">COS’E’ OGGI L’IPAB</h2>
        <p className="mb-4">L’IPAB di oggi è un Centro Servizi con obiettivo fondamentale quello del raggiungimento ed il mantenimento del miglior livello possibile della qualità di vita degli utenti, valorizzando ogni risorsa psico-fisica e ogni potenzialità residua, al fine di favorire l’autonomia, le relazioni familiari e sociali, per tramite anche della fattiva collaborazione delle associazioni di volontariato del nostro territorio.</p>
      </div>
    </div>
  );
}