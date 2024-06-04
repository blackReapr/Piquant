import { Route, Routes } from "react-router-dom";

import "./assets/scss/index.scss";

// Pages
import { Home } from "./pages";

// Components
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
