import React from "react";
import { useStoreActions } from "@/hooks/useTypedHooks";
import { Task as TaskInterface } from "@/store/store";

interface Props {
  todoIndex: number;
  listIndex: number;
  todo: TaskInterface;
}

const Task = ({ todoIndex, listIndex, todo }: Props) => {
  const { deleteTodo, toggleTaskStatus, updateTime } = useStoreActions(
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
      Hours:
      <input
        type="number"
        value={todo.estimatedTime.hours}
        onChange={(e) =>
          updateTime({
            listIndex,
            todoIndex,
            timeUnit: "hours",
            value: parseInt(e.target.value),
          })
        }
      />
      Minutes:
      <input
        type="number"
        value={todo.estimatedTime.minutes}
        onChange={(e) =>
          updateTime({
            listIndex,
            todoIndex,
            timeUnit: "minutes",
            value: parseInt(e.target.value),
          })
        }
      />
    </div>
  );
};

export default Task;
