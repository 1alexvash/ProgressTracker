import { createStore, action, Action, State } from "easy-peasy";

export type Task = {
  name: string;
  description: string;
};

export type List = {
  name: string;
  todos: Task[];
};

export type StoreModel = {
  lists: List[];
  addTodo: Action<
    StoreModel,
    {
      name: string;
      description: string;
      listIndex: number;
    }
  >;
  deleteTodo: Action<
    StoreModel,
    {
      listIndex: number;
      todoIndex: number;
    }
  >;
};

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
  addTodo: action((state, payload) => {
    const { name, description, listIndex } = payload;

    state.lists[listIndex].todos.push({
      name,
      description,
    });
  }),
  deleteTodo: action((state, payload) => {
    const { listIndex, todoIndex } = payload;

    state.lists[listIndex].todos.splice(todoIndex, 1);
  }),
});

export default store;
