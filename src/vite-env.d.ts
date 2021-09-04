/// <reference types="vite/client" />

type Task = {
  name: string;
  description: string;
};

type List = {
  name: string;
  todos: Task[];
};

type StoreModel = {
  lists: List[];
};
