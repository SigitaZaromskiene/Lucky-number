import { useEffect } from "react";
import "./App.scss";
import AddNumberForm from "./Components/AddNumberForm";
import { GlobalContext } from "./Components/Global";
import NumbersList from "./Components/NumbersList";

const KEY = "Lucky";

function App() {
  return (
    <GlobalContext>
      <div className="app-container">
        <div className="content">
          <AddNumberForm></AddNumberForm>
          <NumbersList />
        </div>
      </div>
    </GlobalContext>
  );
}

export default App;
