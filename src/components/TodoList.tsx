import React from "react";
import { Task } from "@/store/store";
import { useStoreActions } from "@/hooks/useTypedHooks";

interface Props {
  todos: Task[];
  listIndex: number;
}

const TodoList = ({ todos, listIndex }: Props) => {
  const { addTodo, deleteTodo } = useStoreActions((actions) => actions);

  return (
    <div>
      {todos.map((todo, todoIndex: number) => (
        <div key={todoIndex}>
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
          <input type="checkbox" checked={todo.done} />
        </div>
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
