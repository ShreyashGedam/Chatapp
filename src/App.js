import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Pages/Dashboard";
import { UseLocalStorage } from "./components/hooks/UseLocalStorage";
import { ContactsProvider } from "./components/contexts/ContactsProvider";

function App() {
  const [id, setId] = UseLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id}></Dashboard>
    </ContactsProvider>
  );

  return (
    <div 
      style={{
        width: "70%",
        margin: "auto",
        border: "1px solid",
        height: "100vh",
      }}
    >
      {id ? <Dashboard id={id} /> : <Login setUserId={setId}></Login>}
    </div>
  );
}

export default App;
