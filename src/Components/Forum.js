import Header from "./Header";
import Footer from "./Footer";

function Forum() {
  return (
    <div class="Top">
      <Header />
      <h3>Forum</h3>
      <h2>Pričaj s drugim userima i budi civiliziran!</h2>
      <div class="FForum">
        <br />
        <br />
        <div class="ForumPost">
          <p class="PostP">Posted by: ADMIN</p>
          <h2>Glasaj za najbolji auto ove godine!</h2>
          <h3>Nemoj propustiti godišnje glasanje!</h3>
          <p class="PostP">Odgovora: 52</p>
          <button>Uđi</button>
          <br />
          <br />
        </div>

        <br />
        <br />
        <div class="ForumPost">
          <p class="PostP">Posted by: AUTOLJUBAC</p>
          <h2>Topic: Prednosti modificiranja auta?</h2>
          <h3>
            Nedavno sam kupio stari auto od susjeda, no vrlo je spor. Bili bih
            trebao kupiti bolje djelove i modificirat ga?
          </h3>
          <p class="PostP">Odgovora: 12</p>
          <button>Uđi</button>
          <br />
          <br />
        </div>

        <br />
        <br />
        <div class="ForumPost">
          <p class="PostP">Posted by: AUTOLJUBAC</p>
          <h2>Topic: </h2>
          <h3>
            Nedavno sam kupio stari auto od susjeda, no vrlo je spor. Bili bih
            trebao kupiti bolje djelove i modificirat ga?
          </h3>
          <p class="PostP">Odgovora: 21</p>
          <button>Uđi</button>
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Forum;
