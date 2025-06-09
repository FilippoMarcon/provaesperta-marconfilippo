import React from "react";

const DELIBERE = [
  {
    tipo: "Delibera Di Consiglio",
    numero: 19,
    data: "10/10/2024",
    oggetto: "PRESA D'ATTO DIMISSIONI CONSIGLIERE MORETTO ROBERTA"
  },
  {
    tipo: "Delibera Di Consiglio",
    numero: 18,
    data: "27/08/2024",
    oggetto: "INCARICO DI SUPPORTO AL SEGRETARIO DIRETTORE"
  },
  {
    tipo: "Delibera Di Consiglio",
    numero: 17,
    data: "27/08/2024",
    oggetto: "PRESA D'ATTO DIMISSIONI CONSIGLIERE MIROGLIO CINZIA"
  },
  {
    tipo: "Delibera Di Consiglio",
    numero: 16,
    data: "15/07/2024",
    oggetto: "APPROVAZIONE DEL BILANCIO DI ESERCIZIO 2023 E RELATIVI ALLEGATI"
  },
  {
    tipo: "Delibera Di Consiglio",
    numero: 15,
    data: "17/04/2024",
    oggetto: "GESTIONE DEL SERVIZIO CENTRO DIURNO 'ANCHISE'. ULTERIORI DETERMINAZIONI."
  }
];

export default function DeliberePage() {
  return (
    <div className="max-w-7xl mx-auto pt-24 pb-10 px-4">
      {/* Titolo */}
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8">Delibere</h1>

      {/* Pulsanti in alto a destra */}
      <div className="flex justify-end gap-2 mb-2">
        <button className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1 text-sm bg-white hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 2a8 8 0 105.293 14.707l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
          </svg>
          Cerca
        </button>
        <button className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1 text-sm bg-white hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2zm4-4h10v2H7v-2zm0-8h10v2H7V7z"/>
          </svg>
          CSV
        </button>
      </div>

      {/* Tabella */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="py-3 px-6 text-left font-bold text-base">
                <span className="inline-flex items-center gap-1">↕ Tipo atto</span>
              </th>
              <th className="py-3 px-4 text-left font-bold text-base">
                <span className="inline-flex items-center gap-1">↕ N.</span>
              </th>
              <th className="py-3 px-4 text-left font-bold text-base">
                <span className="inline-flex items-center gap-1">↕ Data</span>
              </th>
              <th className="py-3 px-6 text-left font-bold text-base">Oggetto</th>
            </tr>
          </thead>
          <tbody>
            {DELIBERE.map((row, idx) => (
              <tr key={row.numero} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-6 whitespace-nowrap">{row.tipo}</td>
                <td className="py-3 px-4 whitespace-nowrap">{row.numero}</td>
                <td className="py-3 px-4 whitespace-nowrap">{row.data}</td>
                <td className="py-3 px-6">{row.oggetto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginazione */}
      <div className="flex items-center justify-center gap-2 mt-6 mb-8 select-none">
        <button className="px-3 py-2 rounded border border-gray-200 bg-white text-xl text-gray-700 hover:bg-gray-100" disabled>{"<"}</button>
        <button className="px-6 py-2 rounded bg-gray-300 text-xl text-gray-700 font-bold" disabled>1</button>
        <button className="px-3 py-2 rounded border border-gray-200 bg-white text-xl text-gray-700 hover:bg-gray-100">2</button>
        <button className="px-3 py-2 rounded border border-gray-200 bg-white text-xl text-gray-700 hover:bg-gray-100">3</button>
        <span className="px-2 text-xl">...</span>
        <button className="px-3 py-2 rounded border border-gray-200 bg-white text-xl text-gray-700 hover:bg-gray-100">25</button>
        <button className="px-3 py-2 rounded border border-gray-200 bg-white text-xl text-gray-700 hover:bg-gray-100">{">"}</button>
      </div>

      {/* Box informativo */}
      <div className="mt-6 bg-blue-100 border border-blue-200 rounded p-4 text-sm">
        <a
          href="#"
          className="text-blue-700 underline font-medium"
        >
          Per leggere i file firmati digitalmente (estensione '.p7m') è necessario aver installato il software Dike (download)
        </a>
        <br />
        <span>Istruzioni per l'apertura di un file con firma digitale</span>
      </div>
    </div>
  );
} 