import { useState, useEffect } from "react";

export const useWrite = (init, isKey) => {
  const [createData, setCreateData] = useState(null);
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(isKey);
    if (data === null) {
      return init;
    }
    return JSON.parse(data);
  });

  useEffect(() => {
    setCreateData(localStorage.setItem(isKey, JSON.stringify(value)));
  }, [value]);

  return [createData, setValue];
};

export default useWrite;
