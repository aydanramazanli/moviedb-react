import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/registration/signup/SignUp";
import Login from "./pages/registration/login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./companents/Navbar/Navbar";
import WishList from "./companents/WishList/WishList"
import MovieDetail from "./companents/MovieDetails/MovieDetail";
import Footer from "./companents/footer/Footer";
import "./style/_style.scss";




function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
