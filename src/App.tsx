import React from "react";

import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
import store from "./store/store";

function TodoList() {
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
}

const App = () => (
  <StoreProvider store={store}>
    <TodoList></TodoList>
  </StoreProvider>
);

export default App;
