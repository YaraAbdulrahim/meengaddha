import React from "react";
import Header from "./components/Header.jsx";
import Greeting from "./components/Greeting.jsx";
import GameDescription from "./components/GameDescription.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import CategoriesPopup from "./components/CategoriesPopup.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Profile from "./components/Profile.jsx";
import ChangePassword from "./components/ChangePassword.jsx";


export default function App() {
  return (
    <>
      <div className="min-h-screen">

        <Routes>
          {/*  Main page: */}
          <Route
            path="/"
            element={
              <>
               <div className="flex flex-col items-center justify-center"></div>

                <img src="/img.png" alt="" className="mx-auto my-4 max-h-32" />
                <Header />
                <Greeting />
                <GameDescription />
              </>
            }
          />

          {/* Rest of the pages */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />

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
