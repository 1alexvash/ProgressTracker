import React, { useState } from "react";
import Task from "./Task";

interface Props {}

const Lists = () => {
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

  const addTask = (listIndex: number) => {
    const taskName = window.prompt("Name of the task")?.trim();
    if (taskName) {
      const newTask = {
        name: taskName,
      };
      const newLists = lists;
      newLists[listIndex].tasks.push(newTask);
      setLists([...newLists]);
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
    <div className="lists">
      {lists.map((list, listIndex) => (
        <div className="list">
          <h2>{list.name}</h2>
          <div className="tasks">
            {list.tasks.map((task: TaskInteface) => (
              <Task task={task} />
            ))}
            <button onClick={() => addTask(listIndex)}>Add Task</button>
          </div>
        </div>
      ))}
      <button onClick={() => addList()}>Add List</button>
    </div>
  );
};

export default Lists;
