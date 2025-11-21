import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Products from "./Products";
import Navbar from "./Navbar";

export default function App() {
  return (  
    <>
      <Navbar/>
      <Router basename="/yeah-web">
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/products" element={<Products />} />
        </Routes>
      </Router>

        
    </>
  );
}
