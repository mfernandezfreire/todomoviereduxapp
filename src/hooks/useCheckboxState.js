import { useState } from "react";

export default (initialValue) => {
  const [watched, setCompleted] = useState((initialValue = false));
  const updateCompleted = () => {
    setCompleted(!watched);
  };
  return [watched, updateCompleted];
};
