import React from "react";

import { StoreProvider } from "easy-peasy";
import store from "./store/store";

import Lists from "./components/Lists";

const App = () => (
  <StoreProvider store={store}>
    <Lists />
  </StoreProvider>
);

export default App;
