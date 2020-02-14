import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "./index.css";
import App from "./App";

Sentry.init({
  dsn: "http://16477a084e104b0daac4a5194da77cf3@localhost:8000/2"
});

ReactDOM.render(<App />, document.getElementById("root"));
