import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodoContextProvider from "./context/TodoContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="9ea1974bec6d40c59ce927e7c0ed8663"
      domain="https://idnbs.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
