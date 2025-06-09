import React from "react";

export default function AlboPretorioPage() {
  return (
    <div className="max-w-7xl mx-auto pt-24 pb-10 px-4">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4 flex items-center" aria-label="Breadcrumb">
        <a href="/" className="font-semibold text-black hover:underline">Home</a>
        <span className="mx-2">›</span>
        <span className="font-semibold text-gray-400">I.P.A.B. informa</span>
        <span className="mx-2">›</span>
        <span className="text-black">Albo pretorio</span>
      </nav>

      {/* Titolo */}
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8">Albo pretorio</h1>

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
          Storico
        </button>
      </div>

      {/* Tabella */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="py-3 px-6 text-center font-bold text-base">Numero pubblicazione</th>
              <th className="py-3 px-6 text-center font-bold text-base">Numero atto</th>
              <th className="py-3 px-6 text-center font-bold text-base">
                <span className="inline-flex items-center gap-1">▼ Data inizio</span>
              </th>
              <th className="py-3 px-6 text-center font-bold text-base">Data fine</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td colSpan={4} className="py-4 px-6 text-center text-gray-700">Nessuna pubblicazione estratta</td>
            </tr>
          </tbody>
        </table>
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