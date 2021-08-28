import { createStore, action, Action } from "easy-peasy";

export interface StoreModel {
  todos: string[];
  addTodo: Action<StoreModel, string>;
}

const store = createStore<StoreModel>({
  todos: ["1", "2", "3"],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
});

export default store;
