import { Route, Routes } from "react-router-dom";

import "./assets/scss/index.scss";

// Pages
import { Home } from "./pages";

// Components
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
