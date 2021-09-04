import React from "react";
import { useStoreState } from "easy-peasy";
import TodoList from "./TodoList";

const Lists = () => {
  const { lists } = useStoreState<StoreModel>((state) => state);

  return (
    <div className="Lists">
      {lists.map((list: List) => (
        <div className="list" key={list.name}>
          <h1>{list.name}</h1>
          <TodoList todos={list.todos} />
        </div>
      ))}
    </div>
  );
};

export default Lists;
