import { Link, Route, Routes } from "react-router-dom";

import "./assets/scss/index.scss";

// Pages
import { Home } from "./pages";

// Components
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

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
        </Routes>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
      <a href="#" className={`toTop ${isActive ? "active" : ""}`}>
        TOP
      </a>
    </>
  );
}

export default App;
