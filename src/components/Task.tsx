import React from "react";

interface Props {
  task: TaskInteface;
}

const Task = ({ task }: Props) => {
  return <div>{task.name}</div>;
};

export default Task;
