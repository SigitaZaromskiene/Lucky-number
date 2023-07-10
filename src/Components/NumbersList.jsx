import { Global } from "./Global";
import { useContext, useEffect } from "react";
import { read, create } from "./localStorage";
import List from "./List";

const KEY = "Lucky";

function NumbersList() {
  const {
    savedNumberList,
    addSavedNumberList,
    lastUpdate,
    setNumber,
    setLastUpdate,
  } = useContext(Global);

  useEffect(() => {
    addSavedNumberList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (setNumber === null) {
      return;
    }
    create(KEY, setNumber);
    setLastUpdate(Date.now());
  }, [setNumber]);

  if (savedNumberList === null) {
    return "Loading...";
  }
  return (
    <div className="list-container">
      {savedNumberList.map((li) => (
        <List li={li} />
      ))}
    </div>
  );
}

export default NumbersList;
