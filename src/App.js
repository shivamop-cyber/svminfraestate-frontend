import React from "react";
import Nav from "./components/navbar/Nav";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "./routes";

import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {routes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              element={<route.element />}
              exact
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} exact />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
