import "./App.css";
import Homepage from "./pages/Homepage";
import Weatherpage from "./pages/Weatherpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:city" element={<Weatherpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
