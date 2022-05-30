import Header from "./Header";
import Footer from "./Footer";
import Slika from "../Acura.jpg";
import Slikaa from "../BMW_3_series.jpg";
import Slikaaa from "../chevrolet-corvette.jpg";
import Slikaaaa from "../Chrysler300.jpg";
import Slikaaaaa from "../FordMustang.jpg";

function Galerija() {
  return (
    <div className="Top">
      <Header />
      <h2>Galerija</h2>
      <br />
      <div class="Galerija">
        <br />
        <br />
        <p>Ovo je kolekcija top 5 automobila prošle goine.</p>
        <p>
          Ako želite nominirati top 5 automobila ove godine, nezaboravite
          posjetiti forume i ostaviti vaš glas!
        </p>
        <br />
        <br />
        <h3>#5 Acura RL</h3>
        <img src={Slika} alt="" />
        <br />
        <h3>#4 BMW 3-Series</h3>
        <img src={Slikaa} alt="" />
        <br />
        <h3>#3 Chevrolet Corvette</h3>
        <img src={Slikaaa} alt="" />
        <br />
        <h3>#2 Chrysler 300</h3>
        <img src={Slikaaaa} alt="" />
        <br />
        <h3>#1 Ford Mustang</h3>
        <img src={Slikaaaaa} alt="" />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Galerija;
