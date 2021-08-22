/// <reference types="vite/client" />

interface ListInteface {
  name: string;
  tasks: TaskInteface[];
}
interface TaskInteface {
  name: string;
}

interface StoreModel {
  lists: ListInteface[];
}
