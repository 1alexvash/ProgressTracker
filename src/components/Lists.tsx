import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import Task from "./Task";

interface Props {}

const Lists = () => {
  const { lists } = useStoreState<StoreModel>((state) => state);
  const { addTask } = useStoreActions<StoreModel>((actions) => actions);

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
      {lists.map((list: ListInteface, listIndex: number) => (
        <div className="list" key={listIndex}>
          <h2>{list.name}</h2>
          <div className="tasks">
            {list.tasks.map((task: TaskInteface, taskIndex: number) => (
              <Task task={task} key={taskIndex} />
            ))}
            <button onClick={() => addTask(listIndex)}>Add Task</button>
          </div>
        </div>
      ))}
      {/* <button onClick={() => addList()}>Add List</button> */}
    </div>
  );
};

export default Lists;
