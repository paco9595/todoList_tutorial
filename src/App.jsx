import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/list";

function App() {
  const [tasks, setTask] = useState([]);
  const addTaskHandler = (task) => {
    setTask((oldArray) => [
      ...oldArray,
      {
        title: task,
        checked: false,
        id: oldArray[oldArray.length - 1]?.id + 1 || 1,
      },
    ]);
  };

  const deleteHandler = (id) => {
    setTask((oldArray) => oldArray.filter((task) => task.id !== id));
  };

  const checkedTaskHandler = (id) => {
    setTask((oldArray) =>
      oldArray.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: !task.checked,
          };
        }
        return task;
      })
    );
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      <Input addTask={addTaskHandler} />
      <div style={{marginTop:'30px'}}>
        <List
          tasks={tasks}
          deleteHandler={deleteHandler}
          checkedTaskHandler={checkedTaskHandler}
        />
      </div>
    </div>
  );
}

export default App;
