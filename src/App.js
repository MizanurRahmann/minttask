import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";
import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";
import Technology from "./pages/Technology/Technology";
import Hire from "./pages/Hire/Hire";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/mobile-app-development" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/technologies" element={<Technology />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </div>
  );
}

export default App;
