import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Gaceta from "./pages/Gaceta";
import Direccion from "./pages/Direccion";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/gaceta" element={<Gaceta />} />
            <Route path="/direccion" element={<Direccion />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
    </>
  );
}

export default App;
