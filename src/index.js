import React from "react";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// react v18
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// redux persist : allows to store the data (in the localstorage) after closing the application
let persistor = persistStore(store);

// PersistGate : retrieve data stored in localstorage before app rendering
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
