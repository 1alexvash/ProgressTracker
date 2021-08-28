import React from "react";

import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
import store from "./store/store";
import { StoreModel, Task } from "@/store/StoreModel";

function TodoList() {
  const todos = useStoreState<StoreModel>((state) => state.todos);
  const addTodo = useStoreActions<StoreModel>((actions) => actions.addTodo);

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

const App = () => {
  return (
    <StoreProvider store={store}>
      <TodoList></TodoList>
    </StoreProvider>
  );
};

export default App;
