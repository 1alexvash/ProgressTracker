import React from "react";

import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
import store from "./store/store";
import { StoreModel } from "./store/store";

function TodoList() {
  const todos = useStoreState<StoreModel>((state) => state.todos);
  const addTodo = useStoreActions<StoreModel>((actions) => actions.addTodo);

  return (
    <div>
      {todos.map((todo: string, index: number) => (
        <div key={index}>{todo}</div>
      ))}
      <button onClick={() => addTodo("something")}>Add Todo</button>
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
