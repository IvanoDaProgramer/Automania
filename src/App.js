import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galerija from "./Components/Galerija";
import Otkup from "./Components/Props";
import Forum from "./Components/Forum";
import Naslovna from "./Components/Naslovna";
import Profil from "./Components/Profil";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna />} />
          <Route path="/Galerija" element={<Galerija />} />
          <Route path="/Otkup" element={<Otkup />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Profil" element={<Profil />} />
          <Route exactpath="/" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
