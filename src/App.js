import React from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

import SignUp from "./components/SignUp";
import Home from "./Home";

const App = () => {
  const { signup, isAuthenticating, authError, isAuthenticated } = useMoralis();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <SignUp
              signup={signup}
              loading={isAuthenticating}
              authError={authError}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="login"
          element={
            <Auth
              signup={signup}
              loading={isAuthenticating}
              authError={authError}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
