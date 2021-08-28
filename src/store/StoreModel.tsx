import { Action } from "easy-peasy";

export interface StoreModel {
  todos: string[];
  addTodo: Action<StoreModel, string>;
}
