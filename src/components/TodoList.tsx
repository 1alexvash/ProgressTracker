import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const TodoList = () => {
  const { todos } = useStoreState<StoreModel>((state) => state);
  const { addTodo } = useStoreActions<StoreModel>((actions) => actions);

  return (
    <div>
      {todos.map((todo: Task, index: number) => (
        <div key={index}>{todo.name}</div>
      ))}
      <button onClick={() => addTodo({ name: "payload", description: "" })}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
