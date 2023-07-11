import { createContext } from "react";
import { useState } from "react";
import useWrite from "./useWrite";

export const Global = createContext();

export const GlobalContext = ({ children }) => {
  const [setNumber, setSelectNumber2] = useState(null);
  const [savedNumberList, addSavedNumberList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteList, setDeleteList] = useState(null);
  const [editList, setEditList] = useState(null);
  const [editListModal, setEditListModal] = useState(null);
  const [editedValue, setEditedValue] = useState(null);

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
        editList,
        setEditList,
        setEditListModal,
        editListModal,
        editedValue,
        setEditedValue,
      }}
    >
      {children}
    </Global.Provider>
  );
};
