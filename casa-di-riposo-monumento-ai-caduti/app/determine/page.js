import React from "react";

const DETERMINE = [
  {
    unita: "DETERMINAZIONE",
    reg: 4,
    data: "29/03/2024",
    oggetto: "AFFIDAMENTO DIRETTO PER ELABORAZIONE CEDOLINI AMMINISTRATORI E ADEMPIMENTI OBBLIGATORI..."
  },
  {
    unita: "DETERMINAZIONE",
    reg: 3,
    data: "29/03/2024",
    oggetto: "PROROGA DEL SERVIZIO DI ASSISTENZA SOCIALE PRESSO LO SPORTELLO ASSISTENTI FAMILIARI FI..."
  },
  {
    unita: "DETERMINAZIONE",
    reg: 2,
    data: "19/02/2024",
    oggetto: "PRESA D'ATTO DIFFIDA VIOLAZIONI FORMALI IN CUMULO MATERIALE"
  },
  {
    unita: "DETERMINAZIONE",
    reg: 1,
    data: "05/02/2024",
    oggetto: "AFFIDAMENTO DIRETTO PER RINNOVO CONTRATTO ANNUALE DI MANUTENZIONE ED ASSISTENZA..."
  },
  {
    unita: "DETERMINAZIONE",
    reg: 45,
    data: "21/12/2023",
    oggetto: "PROROGA DEL SERVIZIO DI ASSISTENZA SOCIALE PRESSO LO SPORTELLO ASSISTENTI FAMILIARI FI..."
  }
];

export default function DeterminePage() {
  return (
    <div className="max-w-7xl mx-auto pt-24 pb-10 px-4">
      {/* Titolo */}
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8">Determine</h1>

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
                <span className="inline-flex items-center gap-1">↕ Unità organizzativa</span>
              </th>
              <th className="py-3 px-4 text-left font-bold text-base">
                <span className="inline-flex items-center gap-1">↕ Reg.Gen.</span>
              </th>
              <th className="py-3 px-4 text-left font-bold text-base">
                <span className="inline-flex items-center gap-1">↕ Data Reg. Gen.</span>
              </th>
              <th className="py-3 px-6 text-left font-bold text-base">Oggetto</th>
            </tr>
          </thead>
          <tbody>
            {DETERMINE.map((row, idx) => (
              <tr key={row.reg + row.data} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-6 whitespace-nowrap">{row.unita}</td>
                <td className="py-3 px-4 whitespace-nowrap">{row.reg}</td>
                <td className="py-3 px-4 whitespace-nowrap">{row.data}</td>
                <td className="py-3 px-6 truncate max-w-xs md:max-w-lg lg:max-w-2xl">{row.oggetto}</td>
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
        <button className="px-3 py-2 rounded border border-gray-200 bg-white text-xl text-gray-700 hover:bg-gray-100">28</button>
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