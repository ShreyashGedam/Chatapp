import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { UseLocalStorage } from "./hooks/UseLocalStorage";

function App() {
  const [id, setId] = UseLocalStorage('id');

  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        border: "1px solid",
        height: "100vh",
      }}
    >
      {id}
      <Login setUserId={setId}></Login>
    </div>
  );
}

export default App;
