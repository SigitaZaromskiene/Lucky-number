import Button from "./Button";
import { useContext, useState } from "react";
import { Global } from "./Global";
import { v4 as uuidv4 } from "uuid";

function AddNumberForm() {
  const [selectNumber, setSelectNumber] = useState(1);
  const { setSelectNumber2 } = useContext(Global);

  const saveNumberHandler = () => {
    setSelectNumber2({
      number: selectNumber,
    });
  };
  return (
    <div className="form">
      <p className="headline">Add new number</p>
      <div className="border"></div>
      <div className="form-content">
        <h3>Please select your lucky number</h3>
        <div className="form-bottom">
          <label>Slide your number</label>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "15px",
            }}
          >
            <p>{selectNumber}</p>
            <input
              onChange={(e) => setSelectNumber(e.target.value)}
              className="input"
              type="range"
              min="1"
              max="99"
              value={selectNumber}
            />
          </div>
          <Button text="Add" action={saveNumberHandler}></Button>
        </div>
      </div>
    </div>
  );
}

export default AddNumberForm;
