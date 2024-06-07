import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// SCSS
import "./assets/scss/index.scss";

// Pages
import { Home, Contact, Products } from "./pages";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [isActive, setIsActive] = useState(false);

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
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
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
