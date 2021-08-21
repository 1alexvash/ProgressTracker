import React, { useState } from "react";

import Task from "./components/Task";

import { StoreProvider } from "easy-peasy";
import store from "./store/store";

interface TaskInteface {
  name: string;
}

const App = () => {
  const [lists, setLists] = useState<object[]>([
    {
      name: "Personal Tasks",
      tasks: [
        { name: "Task number, 1" },
        { name: "Task number, 2" },
        { name: "Task number, 3" },
      ],
    },
  ]);
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
    <StoreProvider store={store}>
      <div>
        <div className="lists">
          {lists.map((list) => (
            <div className="list">
              <h2>{list.name}</h2>
              <div className="tasks">
                {list.tasks.map((task) => (
                  <Task task={task} />
                ))}
                <button onClick={() => addTask()}>Add Task</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StoreProvider>
  );
};

export default App;
