import Slika from "./pfp.jpg";
import Insta from "./Instagram.jpg";
import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

export class Hiperveza extends Component {
  state = {
    username: " ",
    email: " ",
    lozinka: " "
  };
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Header />
        <h3>Tvoj Profile</h3>

        <div class="Profil">
          <br />
          <br />
          <h2>Upiši svoje informacije:</h2>
          <form>
            Username:{" "}
            <input
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <br />
            <br />
            E-mail:{" "}
            <input
              placeholder="email@gmail.com"
              value={this.state.EMail}
              onChange={(e) => this.setState({ EMail: e.target.value })}
            />
            <br />
            <br />
            Lozinka:{" "}
            <input
              value={this.state.lozinka}
              onChange={(e) => this.setState({ lozinka: e.target.value })}
            />
            <br />
            <br />
            <button onClick={(e) => this.onSubmit(e)}>Potvrdi</button>
          </form>

          <br />
          <br />
          <div class="info">
            <br />
            <br />
            <h1>Moje ime je {this.state.username}</h1>
            <h3>Moj E-mail je {this.state.EMail}</h3>
            <h3>Moja trenutna lozinka je {this.state.lozinka}</h3>
            <img src={Slika} alt="" width="250px" />
            <br />
            <br />
            <a href="https://www.instagram.com/" target="blank">
              <img src={Insta} alt="" width="25px" />
            </a>
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
}

export default Hiperveza;
