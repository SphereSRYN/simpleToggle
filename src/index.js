import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// 18이상부터 이거 안씀
// render(<App />, document.getElementById("root")); -
