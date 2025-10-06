import React from "react";
import Header from "./components/Header.jsx";
import Greeting from "./components/Greeting.jsx";
import GameDescription from "./components/GameDescription.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import CategoriesPopup from "./components/CategoriesPopup.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route
            path="/"
            element={
              <>
                <img src="/img.png" alt="" className="mx-auto my-4 max-h-32" />
                <Header />
                <Greeting />
                <GameDescription />
              </>
            }
          />

          {/* Auth */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />

          <Route
            path="/categories"
            element={
              <div className="flex gap-3 md:px-">
                <CategoriesPopup />
              </div>
            }
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
