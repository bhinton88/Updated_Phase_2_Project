import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App"


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);