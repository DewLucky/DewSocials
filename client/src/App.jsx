import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile";
import Register from './pages/register/Register'
import { Route, Routes } from "react-router-dom";

function App() {
  return(
      <>
        {/* <Profile/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="profile/:username" element={<Profile/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Routes>
      </>
  );
}

export default App;
