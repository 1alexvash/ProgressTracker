import React from "react";

interface Props {
  task: {
    name: string;
  };
}

const Task = ({ task }: Props) => {
  return <div>{task.name}</div>;
};

export default Task;
