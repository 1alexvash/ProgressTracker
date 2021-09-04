import React from "react";

import { StoreProvider } from "easy-peasy";
import store from "./store/store";

import TodoList from "./components/TodoList";

const App = () => (
  <StoreProvider store={store}>
    <TodoList />
  </StoreProvider>
);

export default App;
