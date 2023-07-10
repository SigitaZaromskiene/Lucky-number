import { createContext } from "react";
import { useState } from "react";
import useWrite from "./useWrite";

export const Global = createContext();

export const GlobalContext = ({ children }) => {
  const [setNumber, setSelectNumber2] = useState(null);
  const [savedNumberList, addSavedNumberList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  return (
    <Global.Provider
      value={{
        setSelectNumber2,
        savedNumberList,
        addSavedNumberList,
        lastUpdate,
        setLastUpdate,
        setNumber,
      }}
    >
      {children}
    </Global.Provider>
  );
};
