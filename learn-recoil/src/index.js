import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer, todosReducer02 } from "./state/todos_redux";
import { counterReducer, counterReducer02 } from "./state/counter";
import "./utils/lang";

import counterReducer03 from "./state/counter";
import todoReducer03 from "./state/todos_redux";

const store = configureStore({
  reducer: {
    counter: counterReducer03,
    todos: todoReducer03,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
);
