import { createContext } from "react";
import { useState } from "react";
import useWrite from "./useWrite";

export const Global = createContext();

export const GlobalContext = ({ children }) => {
  const [setNumber, setSelectNumber2] = useState(null);
  const [savedNumberList, addSavedNumberList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteList, setDeleteList] = useState(null);

  console.log(deleteList);
  return (
    <Global.Provider
      value={{
        setSelectNumber2,
        savedNumberList,
        addSavedNumberList,
        lastUpdate,
        setLastUpdate,
        setNumber,
        deleteList,
        setDeleteList,
      }}
    >
      {children}
    </Global.Provider>
  );
};
