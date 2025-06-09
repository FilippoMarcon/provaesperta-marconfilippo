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
        ]}
        menuDropdowns={{
          servizi: [
            { label: 'CENTRO DIURNO "ANCHISE"', href: '#' },
            { label: 'CENTRO ANZIANI "COLORA IL TUO TEMPO"', href: '#' },
            { label: 'SERVIZIO ASSISTENZA DOMICILIARE S.A.D.', href: '#' },
            { label: 'SPORTELLO ASSISTENTI FAMILIARI', href: '#' },
            { label: 'PUNTO PRELIEVI "PASSARELLA" SERVIZIO INFERMIERISTICO', href: '#' },
          ],
          percheIpab: [
            { label: "Motivo 1", href: "#" },
            { label: "Motivo 2", href: "#" },
            { label: "Motivo 3", href: "#" },
          ],
          ipabInforma: [
            { label: "Notizia 1", href: "#" },
            { label: "Notizia 2", href: "#" },
            { label: "Notizia 3", href: "#" },
          ],
          accessiRiservati: [
            { label: "Area Riservata 1", href: "#" },
            { label: "Area Riservata 2", href: "#" },
          ],
          privacy: [
            { label: "Privacy Policy", href: "#" },
          ]
        }}
      />
    </>
  );
}
