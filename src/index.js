import React from "react";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
