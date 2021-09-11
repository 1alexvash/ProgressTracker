import React from "react";
import { List } from "@/store/store";
import { useStoreState } from "@/hooks/useTypedHooks";
import TodoList from "./TodoList";

const Lists = () => {
  const { lists } = useStoreState((state) => state);

  return (
    <div className="Lists">
      {lists.map((list: List, listIndex: number) => (
        <div className="list" key={list.name}>
          <h1>{list.name}</h1>
          <TodoList todos={list.todos} listIndex={listIndex} />
        </div>
      ))}
    </div>
  );
};

export default Lists;
