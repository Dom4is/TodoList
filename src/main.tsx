import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store/store.ts";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
