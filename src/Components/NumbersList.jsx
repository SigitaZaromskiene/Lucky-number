import { Global } from "./Global";
import { useContext, useEffect } from "react";
import { read, create } from "./localStorage";
import List from "./List";
import { destory } from "./localStorage";

const KEY = "Lucky";

function NumbersList() {
  const {
    savedNumberList,
    addSavedNumberList,
    lastUpdate,
    setNumber,
    setLastUpdate,
    deleteList,
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

  useEffect(() => {
    if (deleteList === null) {
      return;
    }
    destory(KEY, deleteList.id);
    setLastUpdate(Date.now());
  }, [deleteList]);

  if (savedNumberList === null) {
    return "Loading...";
  }
  return (
    <div className="list-container">
      {savedNumberList.map((li) => (
        <List key={li.id} li={li} />
      ))}
    </div>
  );
}

export default NumbersList;
