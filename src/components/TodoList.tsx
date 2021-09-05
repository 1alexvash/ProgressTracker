import React from "react";
import { useStoreActions } from "easy-peasy";

interface Props {
  todos: Task[];
  listIndex: number;
}

const TodoList = ({ todos, listIndex }: Props) => {
  const { addTodo, deleteTodo } = useStoreActions<StoreModel>(
    (actions) => actions
  );

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
