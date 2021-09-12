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

  const getHours = (totalMinutes: number) => Math.floor(totalMinutes / 60);
  const getMinutes = (totalMinutes: number) => totalMinutes % 60;

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
      Hours:
      <input type="number" value={getHours(todo.estimatedTime.hours)} />
      Minutes:
      <input type="number" value={getMinutes(todo.estimatedTime.minutes)} />
    </div>
  );
};

export default Task;
