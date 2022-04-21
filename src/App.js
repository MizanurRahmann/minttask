import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/mobile-app-development" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
