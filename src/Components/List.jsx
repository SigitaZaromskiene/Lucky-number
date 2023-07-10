import Button from "./Button";
import { useContext } from "react";
import { Global } from "./Global";
import EditListModal from "./EditListModal";

function List({ li }) {
  const { setDeleteList, setEditList, setEditListModal, editListModal } =
    useContext(Global);

  return (
    <div style={{ display: " flex", gap: "20px" }}>
      <div className="list">
        <li>{li.number}</li>
        <div style={{ display: "flex", gap: "20px" }}>
          <Button text="Delete" action={() => setDeleteList(li)} />
          <Button text="Change" action={() => setEditListModal(li)} />
        </div>
      </div>
      {editListModal ? <EditListModal /> : null}
    </div>
  );
}

export default List;
