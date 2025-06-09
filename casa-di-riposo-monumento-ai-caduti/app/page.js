import EventiNews from "../components/EventiNews";
import QuickLinks from "../components/QuickLinks";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img
              src="https://www.cdrmonumento.com/ae2131/images/SFONDO%20BIANCO%20PICCOLO.jpg"
              alt="Logo"
              height={100}
              className="mb-4 mt-10"
            />
            <div className="flex flex-col items-center py-12">
              <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-900">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-blue-400 after:to-indigo-600 after:animate-underline">
                    Eventi e News
                  </span>
                </span>
              </h2>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-sm transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-sm text-gray-600 space-y-4">
                  <p className="font-semibold text-gray-800 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    20/05/2025
                  </p>
                  <p className="text-gray-700">Gentilissimi,</p>
                  <p className="leading-relaxed">
                    il Consiglio di Amministrazione ha il piacere di invitarVi
                    all'inaugurazione delle casette di book crossing che si
                    terrà Lunedì 16 giugno alle ore 16:30 presso il parco della
                    Casa di Riposo "Monumento ai Caduti in Guerra".
                  </p>
                  <p className="italic text-gray-600">Certi di fare cosa gradita, si porgono cordiali saluti.</p>
                </div>
                <img
                  src="/images/Bookcrossing.jpg"
                  alt="Inaugurazione casette book crossing"
                  className="mt-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <EventiNews
              title="Presentazione"
              content={
                <p>
                  Qualche breve cenno alla Storia dell'IPAB "MONUMENTO AI CADUTI
                  IN GUERRA". Dopo l'annessione del Veneto all'Italia,
                  l'Amministrazione comunale di San Donà ebbe un diverso
                  assetto, rispetto a quello avuto sino ad ora: organo principe
                  divenne il Consiglio comunale. Il Sindaco era di nomina regia,
                  ma scelto tra i consiglieri ed affiancato da una Giunta di
                  Assessori eletti dal Consiglio comunale tra i propri membri. A
                  livello nazionale nel 1882 si ammettono all'elettorato
                  politico tutti i cittadini maggiorenni che superino l'esame
                  del corso scolastico obbligatorio oppure paghino un censo di
                  19,80 lire. Subito dopo nel 1915 divenne elettore
                  amministrativo di un comune chi è cittadino italiano, ha
                  compiuto 21 anni, ha la residenza nel comune ovvero paga nel
                  comune un censo, e contro il quale non siano insorte cause di
                  esclusione per incapacità o indegnità.
                </p>
              }
              showAllLink={true}
            />
            <QuickLinks
              links={[
                {
                  label: "Amministrazione trasparente",
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Albo pretorio online",
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Contatti",
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "PagoPa",
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
