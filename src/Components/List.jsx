import Button from "./Button";
import { useContext, useEffect } from "react";
import { Global } from "./Global";
import EditListModal from "./EditListModal";

import { edit } from "./localStorage";
const KEY = "Lucky";

function List({ li }) {
  const {
    setDeleteList,
    setEditList,
    setEditListModal,
    editListModal,
    setLastUpdate,
    editedValue,
  } = useContext(Global);

  useEffect(() => {
    if (editedValue === null) {
      return;
    }
    edit(KEY, editedValue, editedValue.id);
    setLastUpdate(Date.now());
  }, [editedValue]);

  return (
    <div style={{ display: " flex", gap: "20px" }}>
      <div className="list">
        <li>{li.number}</li>
        <div style={{ display: "flex", gap: "20px" }}>
          <Button text="Delete" action={() => setDeleteList(li)} />
          <Button text="Change" action={() => setEditListModal(li)} />
        </div>
      </div>
      {editListModal && li.id === editListModal.id ? (
        <EditListModal li={li} />
      ) : null}
    </div>
  );
}

export default List;
