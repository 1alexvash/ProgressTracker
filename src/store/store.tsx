import { createStore, action } from "easy-peasy";
import state from "./state";
import actions from "./actions";

const store = createStore<StoreModel>({
  lists: [
    {
      name: "Personal Tasks",
      tasks: [
        { name: "Task number, 1" },
        { name: "Task number, 2" },
        { name: "Task number, 3" },
      ],
    },
    {
      name: "Job Tasks",
      tasks: [
        { name: "Job number, 1" },
        { name: "Job number, 2" },
        { name: "Job number, 3" },
      ],
    },
  ],
  addTask: action((state) => {
    state.lists[0].tasks.push({ name: "Some name" });
  }),
});

export default store;
