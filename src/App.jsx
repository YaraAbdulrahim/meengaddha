import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx"; // تأكد الاسم والامتداد مطابقين لاسم الملف

export default function App() {
  return (
    <div className = "flex flex-col items-center justify-center">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Signin />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>



      
    </div>

  );
}
