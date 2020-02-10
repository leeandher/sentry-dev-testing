import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "./index.css";
import App from "./App";

Sentry.init({
  dsn: "http://358be60f5a084c4b8bcd6354244bde4e@localhost:8000/2"
});

ReactDOM.render(<App />, document.getElementById("root"));
