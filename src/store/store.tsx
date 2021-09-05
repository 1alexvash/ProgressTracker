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
  lists: [
    {
      name: "work",
      todos: defaultTodos,
    },
    {
      name: "hobbies",
      todos: defaultTodos,
    },
  ],
  addTodo: action((state: State<StoreModel>, payload) => {
    const { name, description, listIndex } = payload;

    state.lists[listIndex].todos.push({
      name,
      description,
    });
  }),
  deleteTodo: action((state: State<StoreModel>, payload) => {
    const { listIndex, todoIndex } = payload;

    state.lists[listIndex].todos.splice(todoIndex, 1);
  }),
});

export default store;
