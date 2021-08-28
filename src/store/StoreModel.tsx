import { Action } from "easy-peasy";

export type Task = {
  name: string;
  description: string;
};
export interface StoreModel {
  todos: Task[];
  addTodo: Action<StoreModel, string>;
}
