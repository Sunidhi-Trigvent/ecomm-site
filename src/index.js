// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { ModalProvider } from "./components/Modal"; // Import ModalProvider
import { SnackbarProvider } from "./components/Snackbar";
// import { RouterProvider } from "react-router-dom"; // Import RouterProvider
// import { routers } from "./routes/index"; // Import your routers configuration

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ModalProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);

reportWebVitals();
