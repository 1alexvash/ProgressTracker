import React from "react";
import { useStoreActions } from "@/hooks/useTypedHooks";
import { Task as TaskInterface } from "@/store/store";

interface Props {
  todoIndex: number;
  listIndex: number;
  todo: TaskInterface;
}

const Task = ({ todoIndex, listIndex, todo }: Props) => {
  const { deleteTodo, toggleTaskStatus } = useStoreActions(
    (actions) => actions
  );

  return (
    <div>
      <div className="name">{todo.name}</div>
      <div className="description">{todo.description}</div>
      <span
        className="delete"
        onClick={() =>
          deleteTodo({
            listIndex,
            todoIndex,
          })
        }
      >
        ❌
      </span>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTaskStatus({ listIndex, todoIndex })}
      />
    </div>
  );
};

export default Task;
