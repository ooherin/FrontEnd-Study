import { useState } from "react";

const useInputs = (initialValue: Record<string, any>) => {
  const [values, setValues] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return [values, onChange] as const;
};
export default useInputs;
