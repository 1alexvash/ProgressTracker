import { createStore, action, Action } from "easy-peasy";

export type Task = {
  name: string;
  description: string;
  done: boolean;
  estimatedTime: {
    hours: number;
    minutes: number;
  };
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
  toggleTaskStatus: Action<
    StoreModel,
    {
      listIndex: number;
      todoIndex: number;
    }
  >;
  updateTime: Action<
    StoreModel,
    {
      listIndex: number;
      todoIndex: number;
      timeUnit: "hours" | "minutes";
      value: number;
    }
  >;
};

const defaultTodos = [
  {
    name: "First task",
    description: "",
    done: true,
    estimatedTime: {
      hours: 2,
      minutes: 30,
    },
  },
  {
    name: "Second task",
    description: "",
    done: false,
    estimatedTime: {
      hours: 0,
      minutes: 30,
    },
  },
  {
    name: "Third task",
    description: "",
    done: false,
    estimatedTime: {
      hours: 3,
      minutes: 0,
    },
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
      done: false,
      estimatedTime: {
        hours: 0,
        minutes: 0,
      },
    });
  }),
  deleteTodo: action((state, payload) => {
    const { listIndex, todoIndex } = payload;

    state.lists[listIndex].todos.splice(todoIndex, 1);
  }),
  toggleTaskStatus: action((state, payload) => {
    const { listIndex, todoIndex } = payload;

    const task = state.lists[listIndex].todos[todoIndex];
    task.done = !task.done;
  }),
  updateTime: action((state, payload) => {
    const { listIndex, todoIndex, timeUnit, value } = payload;
    console.log("value:", value);

    const task: Task = state.lists[listIndex].todos[todoIndex];

    task.estimatedTime[timeUnit] = value;
  }),
});

export default store;
