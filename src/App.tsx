import React, { useState } from "react";

import Task from "./components/Task";

import { StoreProvider } from "easy-peasy";
import store from "./store/store";

interface ListInteface {
  name: string;
  tasks: TaskInteface[];
}
interface TaskInteface {
  name: string;
}

const App = () => {
  const [lists, setLists] = useState<ListInteface[]>([
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

  const addList = () => {
    const listName = window.prompt("Name of the task")?.trim();
    if (listName) {
      const newList = {
        name: listName,
        tasks: [],
      };
      setLists([...lists, newList]);
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
                {list.tasks.map((task: TaskInteface) => (
                  <Task task={task} />
                ))}
                <button onClick={() => addTask()}>Add Task</button>
              </div>
            </div>
          ))}
          <button onClick={() => addList()}>Add List</button>
        </div>
      </div>
    </StoreProvider>
  );
};

export default App;
