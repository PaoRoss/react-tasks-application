import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContext, TaskContesxtProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContesxtProvider>
      <App />
    </TaskContesxtProvider>
  </React.StrictMode>
);
