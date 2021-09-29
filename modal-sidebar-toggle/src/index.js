import { Grommet } from "grommet";
import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import App from "./App";

ReactDOM.render(
  <Grommet>
    <Normalize />
    <App />
  </Grommet>,
  document.getElementById("root")
);
