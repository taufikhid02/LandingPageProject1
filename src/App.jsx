import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Newsletter from "./components/Newsletter";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Company from "./pages/Company";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Hero />
      <Analytics />
      <Newsletter />
      <Cards /> */}
    </div>
  );
}

export default App;
