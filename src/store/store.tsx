import { createStore, action, State } from "easy-peasy";

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

const store = createStore({
  todos: defaultTodos,
  addTodo: action((state: State<StoreModel>, payload) => {
    state.todos.push(payload);
  }),
});

export default store;
