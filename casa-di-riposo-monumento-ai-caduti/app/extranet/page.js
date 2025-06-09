import Login from "../../components/Login";

export default function Home() {
  return (
    <>
      <Login
  title="Accedi alla Extranet"
  inputs={[
    { id: "utente", type: "text", label: "Utente", placeholder: "Inserisci il tuo utente" },
    { id: "password", type: "password", label: "Password", placeholder: "Inserisci la tua password" },
    { id: "rifPratica", type: "text", label: "Rif. pratica", placeholder: "Inserisci il riferimento pratica" },
  ]}
/>
    </>
  );
}
