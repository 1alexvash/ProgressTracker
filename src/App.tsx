import React from "react";
import "./scss/main.scss";

import { StoreProvider } from "easy-peasy";
import store from "./store/store";

import Lists from "./components/Lists";

const App = () => (
  <div className="App">
    <StoreProvider store={store}>
      <Lists />
    </StoreProvider>
  </div>
);

export default App;
