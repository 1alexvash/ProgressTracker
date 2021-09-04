import React from "react";
import { useStoreActions } from "easy-peasy";

interface Props {
  todos: Task[];
}

const TodoList = ({ todos }: Props) => {
  // const { addTodo } = useStoreActions<StoreModel>((actions) => actions);

  return (
    <div>
      {todos.map((todo, index: number) => (
        <div key={index}>{todo.name}</div>
      ))}
      {/* <button onClick={() => addTodo({ name: "payload", description: "" })}>
        Add Todo
      </button> */}
    </div>
  );
};

export default TodoList;
