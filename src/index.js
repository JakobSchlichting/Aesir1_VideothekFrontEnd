import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { store } from "./redux/store";
import { Provider } from "react-redux";

//import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


