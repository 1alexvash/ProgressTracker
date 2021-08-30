/// <reference types="vite/client" />

type Task = {
  name: string;
  description: string;
};
interface StoreModel {
  todos: Task[];
}
