import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Gaceta from "./pages/Gaceta";
import NotFound from "./pages/NotFound";
import Direccion from "./pages/Direccion";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";
import NavIcon from "./components/NavIcon";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavIcon />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/gaceta" element={<Gaceta />} />
        <Route
          path="/direccion/agronomia-y-medio-ambiente"
          element={<Direccion />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// Install an updated version of React router. just to make sure.
{
  /* <Route path="/direccion" element={<Direccion />} /> */
}

{
  /* <Route path="/direccion/asf" element={<Direccion />} />
        <Route path="/direccion/asdf" element={<Direccion />} />
        <Route path="/direccion/aaa" element={<Direccion />} /> */
}
