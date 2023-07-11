import Button from "./Button";
import { useContext, useState } from "react";
import { Global } from "./Global";

function EditListModal({ li }) {
  const { setEditListModal, savedNumberList } = useContext(Global);

  console.log(savedNumberList);

  const [newValue, setNewValue] = useState(li);
  return (
    <div className="range-modal">
      <label>{li.number}</label>
      <input type="range" min="1" max="99" />
      <Button text="Save"></Button>
      <Button action={() => setEditListModal(null)} text="Cancel"></Button>
    </div>
  );
}

export default EditListModal;
