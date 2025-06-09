import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar
        logo={{
          src: "https://www.maalox.com/dam/jcr:554bf42e-c7fb-4bd0-8352-80bbb7a27ced/Logo.svg",
          alt: "Maalox Logo",
        }}
        menuItems={[
          { label: "Homepage", href: "/", active: true },
          { label: "SERVIZI", href: "#", dropdown: true, dropdownKey: "servizi" },
          { label: "PERCHE' L'IPAB", href: "#", dropdown: true, dropdownKey: "percheIpab" },
          { label: "I.P.A.B. informa", href: "#", dropdown: true, dropdownKey: "ipabInforma" },
          { label: "Sostienici", href: "#" },
          { label: "Accessi riservati", href: "#", dropdown: true, dropdownKey: "accessiRiservati" },
          { label: "Extranet", href: "#" },
          { label: "PRIVACY", href: "#" },
        ]}
        menuDropdowns={{
          servizi: {
            links: [
              { label: 'CENTRO DIURNO "ANCHISE"', href: '#' },
              { label: 'CENTRO ANZIANI "COLORA IL TUO TEMPO"', href: '#' },
              { label: 'SERVIZIO ASSISTENZA DOMICILIARE S.A.D.', href: '#' },
              { label: 'SPORTELLO ASSISTENTI FAMILIARI', href: '#' },
              { label: 'PUNTO PRELIEVI "PASSARELLA" SERVIZIO INFERMIERISTICO', href: '#' },
            ]
          },
          percheIpab: {
            links: [
              { label: "VISION E MISSION", href: "#" },
              { label: "STATUTO", href: "#" },
            ]
          },
          ipabInforma: {
            title: "ACCESSO AGLI ATTI",
            description: [
              "Il servizio consente la consultazione degli atti amministrativi in corso di pubblicazione all'Albo Pretorio on-line, nonché degli atti la cui pubblicazione è scaduta.",
            ],
            links: [
              { label: "Albo pretorio", href: "#" },
              { label: "Delibere", href: "#" },
              { label: "Determine", href: "#" },
            ],
            right: {
              title: "AMMINISTRAZIONE TRASPARENTE",
              text: "In questa sezione sono pubblicati, raggruppati secondo le indicazioni di legge, documenti, informazioni e dati concernenti l'organizzazione dell'amministrazione, le attivita' e le sue modalita' di realizzazione.",
              links: [
                { label: "Amministrazione trasparente", href: "#" }
              ]
            }
          },
          accessiRiservati: {
            links: [
              { label: "Intranet sito", href: "#" },
              { label: "Area Dipendenti", href: "#" },
            ]
          },
          privacy: {
            links: [
              { label: "Privacy Policy", href: "#" },
            ]
          }
        }}
      />
    </>
  );
}
