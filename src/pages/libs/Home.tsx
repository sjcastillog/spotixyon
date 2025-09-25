import React from "react";
import "../css/home.css";
import { Navbar } from "../../shared/components";

export const Home: React.FC = () => {
  const handleSpotifyLogin = () => {
    console.log("Iniciar sesión con Spotify");
  };

  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <div className="hero-logo">
          <div className="arrow-symbol">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 -960 960 960"
              width="100%"
              fill="#D6F379"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Disfruta de la <br />
            <span className="highlight">mejor música</span>
          </h1>

          <p className="hero-description">
            Accede a tu cuenta para guardar tus <br />
            álbumes favoritos.
          </p>

          <a className="spotify-btn" onClick={handleSpotifyLogin} href="/searcher">
            <span>Log in con Spotify</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </main>
    </div>
  );
};
