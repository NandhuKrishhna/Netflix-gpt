import React from "react";
import Body from "./components/Body.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const App = () => {
  return (
    <div className="min-h-screen">
      <Provider store ={appStore}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
