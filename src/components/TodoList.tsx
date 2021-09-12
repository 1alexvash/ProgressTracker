import React from "react";
import { Task as TaskInterface } from "@/store/store";
import { useStoreActions } from "@/hooks/useTypedHooks";
import Task from "./Task";

interface Props {
  todos: TaskInterface[];
  listIndex: number;
}

const TodoList = ({ todos, listIndex }: Props) => {
  const { addTodo } = useStoreActions((actions) => actions);

  return (
    <div>
      {todos.map((todo, todoIndex: number) => (
        <Task
          key={todoIndex}
          todoIndex={todoIndex}
          listIndex={listIndex}
          todo={todo}
        />
      ))}
      <button
        onClick={() =>
          addTodo({
            name: "payload",
            description: "",
            listIndex,
          })
        }
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
