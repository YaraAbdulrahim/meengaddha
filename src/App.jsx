import React from "react";
import Header from "./components/Header.jsx";
import Greeting from "./components/Greeting.jsx";
import GameDescription from "./components/GameDescription.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import CategoriesPopup from "./components/CategoriesPopup.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './components/Homepage.jsx'



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
            <Homepage/>
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
