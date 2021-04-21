import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { routes } from "./router/config";

// import store from "./store";

function App() {

  return (
    // // <Provider store={store().store}>
    //   <PersistGate loading={null} persistor={store().persistor}>
        <BrowserRouter>
          <Router routes={routes} />
        </BrowserRouter>
      // </PersistGate>
    // </Provider>
  );
}

export default App;
