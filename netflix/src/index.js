import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./context/firebase";
import { GlobalStyle } from "./global-style";
import { firebase } from "./lib/firebase.prod";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
