import { createStore, action } from "easy-peasy";

import { StoreModel } from "./StoreModel";

const store = createStore<StoreModel>({
  todos: ["1", "2", "3"],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
});

export default store;
