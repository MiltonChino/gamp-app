import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Gaceta from "./pages/Gaceta";
import Direccion from "./pages/Direccion";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Inicio />
      break
      case "/gaceta":
        component = <Gaceta />
        break
        case "/direccion":
      component = <Direccion />
      break
      case "/contacto":
      component = <Contacto />
      break
  }
  return (
    <>
      <Navbar />
      {component}
      {/* <div className="container"> */}
        {/* <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/gaceta" element={<Gaceta />} />
            <Route path="/direccion" element={<Direccion />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Router> */}
      {/* </div> */}
    </>
  );
}

export default App;
