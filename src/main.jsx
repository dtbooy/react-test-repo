// Import React modules
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import CSS
import "./index.css";
// Import Pages
import App from "./routes/App.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Fruit from "./routes/Fruit.jsx";
import LoginForm from "./routes/LoginForm.jsx";
import LiftingState from "./routes/lifting-state/LiftingState.jsx";
import Generator from "./routes/business-card-generator/Generator.jsx";


// Create Router
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/fruit", element: <Fruit /> },
  { path: "/login", element: <LoginForm /> },
  { path: "/user/:userId", element: <LiftingState /> },
  { path: "/card", element: <Generator/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
