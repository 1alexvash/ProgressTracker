import { action } from "easy-peasy";

const actions = {
  sayHello: action((state) => {
    alert("hello");
  }),
};

export default actions;
