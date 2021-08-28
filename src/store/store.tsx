import { createStore, action } from "easy-peasy";

import { StoreModel } from "./StoreModel";

const defaultTodos = [
  {
    name: "First task",
    description: "",
  },
  {
    name: "Second task",
    description: "",
  },
  {
    name: "Third task",
    description: "",
  },
];

const store = createStore<StoreModel>({
  todos: defaultTodos,
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
});

export default store;
