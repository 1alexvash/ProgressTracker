import React from "react";
import { useStoreState } from "easy-peasy";

import Task from "./Task";

interface Props {}

const Lists = () => {
  const { lists } = useStoreState((state) => state);

  // const addTask = (listIndex: number) => {
  //   const taskName = window.prompt("Name of the task")?.trim();
  //   if (taskName) {
  //     const newTask = {
  //       name: taskName,
  //     };
  //     const newLists = lists;
  //     newLists[listIndex].tasks.push(newTask);
  //     setLists([...newLists]);
  //   }
  // };

  // const addList = () => {
  //   const listName = window.prompt("Name of the task")?.trim();
  //   if (listName) {
  //     const newList = {
  //       name: listName,
  //       tasks: [],
  //     };
  //     setLists([...lists, newList]);
  //   }
  // };

  return (
    <div className="lists">
      {lists.map((list, listIndex) => (
        <div className="list" key={listIndex}>
          <h2>{list.name}</h2>
          <div className="tasks">
            {list.tasks.map((task: TaskInteface, taskIndex: number) => (
              <Task task={task} key={taskIndex} />
            ))}
            {/* <button onClick={() => addTask(listIndex)}>Add Task</button> */}
          </div>
        </div>
      ))}
      {/* <button onClick={() => addList()}>Add List</button> */}
    </div>
  );
};

export default Lists;
