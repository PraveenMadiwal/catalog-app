import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Built by <strong>Praveen Kumar M S</strong> |
        <a
          href="https://github.com/PraveenMadiwal/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://praveenwebpage.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Portfolio
        </a>
      </p>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;