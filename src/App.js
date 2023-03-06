import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Login } from "./components/Login";

function App() {
  const [id, setId] = useState("");

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
