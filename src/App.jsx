import React from "react";
import Header from "./components/Header.jsx";
import Greeting from "./components/Greeting.jsx";
import GameDescription from "./components/GameDescription.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import CategoriesPopup from "./components/CategoriesPopup.jsx"; // ← هذا هو
import PlaySetup from "./components/PlaySetup.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <img src="/img.png" alt="" className="mx-auto my-4 max-h-32" />
      <Header />

      <div className="flex flex-col items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Greeting />
                <GameDescription />
              </>
            }
          />

          {/* Auth */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />

    
          <Route path="/categories" element={<CategoriesPopup />} />
          <Route path="/play" element={<PlaySetup />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
