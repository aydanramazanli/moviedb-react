import { Routes, Route } from 'react-router-dom';
import './style/_style.scss';
import SignUp from './pages/registration/SignUp/SignUp';
import Login from './pages/registration/Login/Login';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import WishList from './components/WishList/WishList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';
import Account from './components/Account/Account';

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/account" element={<Account />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" exact element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
