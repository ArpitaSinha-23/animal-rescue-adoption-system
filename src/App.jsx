import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rescue from "./pages/Rescue";
import Adoption from "./pages/Adoption";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rescue" element={<Rescue />} />
        <Route path="/adoption" element={<Adoption />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;