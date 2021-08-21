import React, { useState } from "react";

import Task from "./components/Task";

interface TaskInteface {
  name: string;
}

const App = () => {
  const [tasks, setTasks] = useState<TaskInteface[]>([]);

  const addTask = () => {
    const taskName = window.prompt("Name of the task")?.trim();
    if (taskName) {
      const newTask = {
        name: taskName,
      };
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </ul>
      <h1>Hello from the app!</h1>
      <button onClick={() => addTask()}>Add Task</button>
    </div>
  );
};

export default App;
