import Button from "./Button";
import { useContext, useState } from "react";
import { Global } from "./Global";

function EditListModal({ li }) {
  const { setEditListModal, setEditedValue } = useContext(Global);

  const [newValue, setNewValue] = useState(li.number);

  const editedValueHandler = () => {
    setEditedValue({
      number: newValue,
      id: li.id,
    });
    setEditListModal(null);
  };

  return (
    <div className="range-modal">
      <label>{newValue}</label>
      <input
        type="range"
        min="1"
        max="99"
        onChange={(e) => setNewValue(e.target.value)}
        value={newValue}
      />
      <Button action={editedValueHandler} text="Save"></Button>
      <Button action={() => setEditListModal(null)} text="Cancel"></Button>
    </div>
  );
}

export default EditListModal;
