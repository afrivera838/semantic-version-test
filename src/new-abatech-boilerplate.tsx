import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root.component";

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>  
  );