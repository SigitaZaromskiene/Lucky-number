import { useContext } from "react";
import "./App.scss";
import AddNumberForm from "./Components/AddNumberForm";
import { GlobalContext } from "./Components/Global";
import NumbersList from "./Components/NumbersList";

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
