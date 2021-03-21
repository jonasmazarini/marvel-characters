import React from "react";
import { Provider } from "react-redux";
import Router from "./routes";
import store from "./store";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
