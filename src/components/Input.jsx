import { useState } from "react";

export default function Input({ addTask }) {
  const [task, setTask] = useState("");
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      addTask(e.target.value);
      setTask('')
    }
  };
  return (
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      onKeyUp={enterHandler}
      style={{
        width: "80%",
        margin: "0 auto",
        height: "30px",
        paddingLeft: "10px",
      }}
    />
  );
}
