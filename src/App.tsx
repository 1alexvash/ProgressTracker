import React, { useState } from "react";

interface Props {}

type TaskArray = string[];

const App = (props: Props) => {
  const [tasks, setTasks] = useState<TaskArray>([]);

  const addTask = () => {
    const taskName = window.prompt("Name of the task")?.trim();
    if (taskName) {
      setTasks([...tasks, taskName]);
    }
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
      <h1>Hello from the app!</h1>
      <button onClick={() => addTask()}>Add Task</button>
    </div>
  );
};

export default App;
