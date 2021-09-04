/// <reference types="vite/client" />

type Task = {
  name: string;
  description: string;
};
type StoreModel = {
  todos: Task[];
};
