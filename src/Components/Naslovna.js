import { Link } from "react-router-dom";
import Slika from "../Subaru.jpg";
import Footer from "./Footer";

function Naslovna() {
  return (
    <div className="Naslovna">
      <h1>AutoMania</h1>
      <h3>#1 za Automobile i druga vozila</h3>
      <p>Linkovi:</p>
      <table>
        <ul>
          <li>
            <Link to="Galerija">Galerija</Link>
          </li>
          <li>
            <Link to="Otkup">Otkup</Link>
          </li>
          <li>
            <Link to="Forum">Forum</Link>
          </li>
          <li>
            <Link to="Profil">Profil</Link>
          </li>
        </ul>
      </table>
      <img src={Slika} alt="" width="50%" />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Naslovna;
