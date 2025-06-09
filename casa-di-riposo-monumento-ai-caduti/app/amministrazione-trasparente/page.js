import React from "react";

const menu = [
  { label: "BANDI DI GARA", bold: true },
  { label: "Disposizioni generali", open: true },
  { label: "Consulenti e collaboratori", open: true },
  { label: "Personale", open: true },
  { label: "Bandi di concorso" },
  { label: "Enti controllati", open: true },
  { label: "Performance", open: true },
  { label: "Attività e procedimenti", open: true },
  { label: "Organizzazione", open: true },
  { label: "Provvedimenti", open: true },
  { label: "Bandi di gara e contratti", open: true },
  { label: "Sovvenzioni, contributi, sussidi, vantaggi economici", open: true },
  { label: "Bilanci", open: true },
  { label: "Beni immobili e gestione patrimonio", open: true },
  { label: "Controlli e rilievi sull'amministrazione", open: true },
  { label: "Servizi erogati", open: true },
  { label: "Pagamenti dell'amministrazione", open: true },
  { label: "Opere pubbliche", open: true },
  { label: "Pianificazione e governo del territorio" },
  { label: "Strutture sanitarie private accreditate", open: true },
  { label: "Interventi straordinari e di emergenza" },
  { label: "Altri contenuti" },
];

export default function AmministrazioneTrasparentePage() {
  return (
    <div className="max-w-7xl mx-auto pt-24 pb-10 px-4 flex flex-col lg:flex-row gap-8">
      {/* Colonna sinistra */}
      <div className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <a href="/" className="font-semibold text-black hover:underline">Home</a>
          <span className="mx-2">›</span>
          <span>Amministrazione Trasparente</span>
        </nav>
        {/* Titolo */}
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">Amministrazione trasparente</h1>
        {/* Testo introduttivo */}
        <p className="mb-4">
          <span className="font-bold">Il decreto legislativo 14 marzo 2013 n. 33</span> recante disposizioni in materia di "Riordino della disciplina riguardante gli obblighi di pubblicità, trasparenza e diffusione di informazioni da parte delle pubbliche amministrazioni", introduce le seguenti novità:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>
            viene istituito l'obbligo di pubblicità: delle situazioni patrimoniali di politici, e parenti entro il secondo grado; degli atti dei procedimenti di approvazione dei piani regolatori e delle varianti urbanistiche; dei dati, in materia sanitaria, relativi alle nomine dei direttori generali, oltre che agli accreditamenti delle strutture cliniche.
          </li>
          <li>
            viene data una definizione del principio generale di trasparenza: accessibilità totale delle informazioni che riguardano l'organizzazione e l'attività delle P.A., allo scopo di favorire forme diffuse di controllo sul perseguimento delle funzioni istituzionali e sull'utilizzo delle risorse pubbliche.
          </li>
          <li>
            si stabilisce il principio della totale accessibilità delle informazioni. Il modello di ispirazione è quello del Freedom of Information Act statunitense, che garantisce l'accessibilità di chiunque lo richieda a qualsiasi documento o dato in possesso delle P.A., salvo i casi in cui la legge lo esclude espressamente (es. per motivi di sicurezza).
          </li>
          <li>
            viene introdotto un nuovo istituto: il diritto di accesso civico. Questa nuova forma di accesso mira ad alimentare il rapporto di fiducia tra cittadini e P.A. e a promuovere il principio di legalità (e prevenzione della corruzione). In sostanza, tutti i cittadini hanno diritto di chiedere e ottenere che le P.A. pubblichino atti, documenti e informazioni che detengono e che, per qualsiasi motivo, non hanno ancora divulgato.
          </li>
          <li>
            si prevede l'obbligo per i siti istituzionali di creare un'apposita sezione - «Amministrazione trasparente» - nella quale inserire tutto quello che stabilisce il provvedimento.
          </li>
          <li>
            viene disciplinato il Piano triennale per la trasparenza e l'integrità - che è parte integrante del Piano di prevenzione della corruzione - e che deve indicare le modalità di attuazione degli obblighi di trasparenza e gli obiettivi collegati con il piano della performance.
          </li>
        </ul>
      </div>
      {/* Colonna destra: menu */}
      <aside className="w-full lg:w-[400px] flex-shrink-0 mt-12 lg:mt-0">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">Amministrazione trasparente</h2>
        <div className="divide-y">
          {menu.map((item, idx) => (
            <div key={item.label} className={"flex items-center justify-between px-6 py-3 " + (item.bold ? "font-bold text-base uppercase text-gray-800" : "font-normal text-base text-gray-700") }>
              <span>{item.label}</span>
              {item.open && (
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}