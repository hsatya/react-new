import ReactDOM from "react-dom/client";
// import React from "react";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Hello from MyApp</h1>
//     </div>
//   );
// }

// const reactElement = React.createElement(
//   "a",
//   { href: "https://www.google.com", target: "_blank" },
//   "click me to visit google.com"
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
