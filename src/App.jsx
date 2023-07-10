import "./App.scss";
import AddNumberForm from "./Components/AddNumberForm";

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <AddNumberForm></AddNumberForm>
        <div className="list"></div>
      </div>
    </div>
  );
}

export default App;
