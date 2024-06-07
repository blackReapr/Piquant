import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// SCSS
import "./assets/scss/index.scss";

// Pages
import { Home, Contact, Products, ProductDetail } from "./pages";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isBgOver, setIsBgOver] = useState(true);

  const location = useLocation();
  useEffect(() => {
    setIsBgOver(location.pathname.includes("/products/") ? false : true);
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) setIsActive(true);
      else {
        setIsActive(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header isBgOver={isBgOver} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
      <a href="#" className={`toTop ${isActive ? "active" : ""}`}>
        TOP
      </a>
    </>
  );
}

export default App;
