import React, { useState } from "react";

import { StoreProvider, useStoreState } from "easy-peasy";
import store from "./store/store";
import Lists from "./components/Lists";

const App = () => {
  return (
    <StoreProvider store={store}>
      <Lists />
    </StoreProvider>
  );
};

export default App;
