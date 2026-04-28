import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Detail Page */}
        <Route path="/detail/:name" element={<Detail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;