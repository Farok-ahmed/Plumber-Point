import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Loader from "./Loader";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Service from "./pages/Service";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <div className={loading ? "pointer-events-none opacity-50" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
