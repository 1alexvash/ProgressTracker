import { createStore } from "easy-peasy";
import state from "./state";
import actions from "./actions";

const store = createStore<StoreModel>({
  ...state,
  ...actions,
});

export default store;
