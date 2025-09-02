import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Login />} />

        {/* Student Result page */}
        <Route path="/result" element={<Result />} />

        {/* Admin page */}
        <Route path="/admin" element={<Admin />} />

        {/* Catch-all → Redirect to Login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
