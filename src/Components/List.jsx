import Button from "./Button";

function List({ li }) {
  return (
    <div className="list">
      <li>{li.number}</li>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button text="Delete" />
        <Button text="Change" />
      </div>
    </div>
  );
}

export default List;
