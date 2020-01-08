import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "./index.css";
import App from "./App";

// Sentry.init({dsn: })

ReactDOM.render(<App />, document.getElementById("root"));
