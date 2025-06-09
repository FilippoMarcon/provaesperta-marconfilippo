import Login from "../../components/Login";

export default function Home() {
  return (
    <>
      <Login
        title="Accedi alla Intranet"
        inputs={[
          {
            id: "cognome",
            type: "text",
            label: "Cognome",
            placeholder: "Cognome",
          },
          { id: "nome", type: "text", label: "Nome", placeholder: "Nome" },
          {
            id: "password",
            type: "password",
            label: "Password",
            placeholder: "Password",
          },
        ]}
      />
    </>
  );
}
