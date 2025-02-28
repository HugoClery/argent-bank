
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Error from "./pages/Error.jsx";
import PrivateRoute from "./components/Privateroute";
import "./sass/_Main.scss";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/user" element={<PrivateRoute element={<Profile />} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}