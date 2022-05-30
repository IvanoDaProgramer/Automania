import Header from "./Header";
import Footer from "./Footer";
import Ford from "./ford.jpg";
import Clio from "./klio.jpg";
import Fiat from "./Fiat.jpg";

export default function Otkup({ salji }) {
  return (
    <div className="Top">
      <Header />
      <h3>Otkup</h3>
      <h2>Prodaj i kupi!</h2>
      <div className="Handle">
        <br />
        <br />
        <div class="Post">
          <h2 class="PostH2">Prodajem Ford Focus!</h2>
          <br />
          <h3 class="PostH3">Cijena po dogovoru.</h3>
          <p class="PostP">Ford Karavan u odličnom stanju.</p>
          <p class="PostP">Cijena: {salji.Cijena1}</p>
          <p class="PostP">Rabljeno vozilo: {salji.Rabljenost1}</p>
          <p class="PostP">Godina proizvodnje: {salji.Godina1}</p>
          <img src={Ford} alt="" class="SlikaOtk" />
          <br />
          <br />
          <button>Kupi</button>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div class="Post">
          <h2 class="PostH2">Novi Clio na prodaji.</h2>
          <br />
          <h3 class="PostH3">Cijena fiksna.</h3>
          <p class="PostP">Clio u odličnom stanju, ne radi klima.</p>
          <p class="PostP">Cijena: {salji.Cijena2}</p>
          <p class="PostP">Rabljeno vozilo: {salji.Rabljenost2}</p>
          <p class="PostP">Godina proizvodnje: {salji.Godina2}</p>
          <img src={Clio} alt="" class="SlikaOtk2" />
          <br />
          <br />
          <button>Kupi</button>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div class="Post">
          <h2 class="PostH2">!Fiat Punto!</h2>
          <br />
          <h3 class="PostH3">Cijena po dogovoru.</h3>
          <p class="PostP">Dobro stanje, čisto i popravljeno.</p>
          <p class="PostP">Cijena: {salji.Cijena3}</p>
          <p class="PostP">Rabljeno vozilo: {salji.Rabljenost3}</p>
          <p class="PostP">Godina proizvodnje: {salji.Godina3}</p>
          <img src={Fiat} alt="" class="SlikaOtk3" />
          <br />
          <br />
          <button>Kupi</button>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
