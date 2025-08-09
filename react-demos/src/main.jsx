import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx"
import Greet from "./components/Greet.jsx";


createRoot(document.getElementById("root")).render(
  <createRoot>
    <App/>
  </createRoot >
)

// createRoot(document.getElementById("root")).render(
//   <createRoot>
//     <Greet></Greet>
//   </createRoot>
// )
