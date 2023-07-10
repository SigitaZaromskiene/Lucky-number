import Button from "./Button";
import { useContext } from "react";
import { Global } from "./Global";

function List({ li }) {
  const { setDeleteList, setEditList } = useContext(Global);

  return (
    <div className="list">
      <li>{li.number}</li>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button text="Delete" action={() => setDeleteList(li)} />
        <Button text="Change" action={() => setEditList(li)} />
      </div>
    </div>
  );
}

export default List;
