import { Global } from "./Global";
import { useContext, useEffect } from "react";
import { read, create } from "./localStorage";

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
    <div>
      {savedNumberList.map((li) => (
        <li>{li.number}</li>
      ))}
    </div>
  );
}

export default NumbersList;
