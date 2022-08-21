import React from "react";
import { HashRouter, useRoutes } from "react-router-dom";
import { appRouter } from "./router";

const App = () => {
  const appRoute = useRoutes(appRouter);
  return appRoute;
};

const Wrapper = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
export default Wrapper;
