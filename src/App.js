//import { Routes, Route } from "react-router-dom";
import SignUp from './pages/registration/signup/SignUp'
import Login from './pages/registration/login/Login'
import './style/_style.scss'

function App() {
  return <div>
    {/* <SignUp/> */}
    <Login/>

    {/* <Routes>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes> */}
    
  </div>;
}

export default App;
