import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/registration/signup/SignUp";
import Login from "./pages/registration/login/Login";
import Home from './pages/Home/Home'
import "./style/_style.scss";

function App() {
  return (
    <>

      <Routes>
      <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
