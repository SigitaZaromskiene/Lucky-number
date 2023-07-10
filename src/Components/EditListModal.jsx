import Button from "./Button";

function EditListModal() {
  return (
    <div className="range-modal">
      <label></label>
      <input type="range" min="1" max="99" />
      <Button text="Save"></Button>
      <Button text="Cancel"></Button>
    </div>
  );
}

export default EditListModal;
