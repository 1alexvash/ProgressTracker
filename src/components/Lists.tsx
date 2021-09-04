import React from "react";
import { useStoreState } from "easy-peasy";

const Lists = () => {
  const { lists } = useStoreState<StoreModel>((state) => state);

  return <div></div>;
};

export default Lists;
