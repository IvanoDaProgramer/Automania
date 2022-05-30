import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/" class="natrag">
        NATRAG
      </Link>
      <h1>AutoMania</h1>
      <h3>Napravio: Ivano Majić, G2P </h3>
      <p>tema: automobili</p>
    </div>
  );
}

export default Header;
