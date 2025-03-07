import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.tsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/shared/theme-provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Toaster position="top-center" richColors />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
