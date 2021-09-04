import React from "react";
import { useStoreActions } from "easy-peasy";

interface Props {
  todos: Task[];
  listIndex: number;
}

const TodoList = ({ todos, listIndex }: Props) => {
  const { addTodo } = useStoreActions<StoreModel>((actions) => actions);

  return (
    <div>
      {todos.map((todo, index: number) => (
        <div key={index}>{todo.name}</div>
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
