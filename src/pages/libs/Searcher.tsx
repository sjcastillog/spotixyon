import React from "react";
import "../css/searcher.css";
import { Navbar } from "../../shared/components";
import { useNavigate } from "react-router-dom";
import { mockArtists } from "../mocks";

export const Searcher: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results] = React.useState(mockArtists);

  return (
    <div className="search-container">
      <Navbar isLogin={true} />

      <main className="search-main">
        <div className="search-section">
          <h1 className="search-title">
            Busca tus <br />
            <span className="highlight">artistas</span>
          </h1>

          <p className="search-description">
            Encuentra tus artistas favoritos gracias a nuestro buscador y guarda
            tus álbumes favoritos
          </p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Nirvana"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>

        <div className="results-section">
          <p className="results-info">
            Mostrando <span className="results-count">4</span> resultados de{" "}
            <span className="results-total">[nombreartista]</span>
          </p>

          <div className="artists-grid">
            {results.map((artist) => (
              <div
                key={artist.id}
                className="artist-card"
                onClick={() => navigate("/searcher-detailed")}
              >
                <div className="artist-image">
                  <img src={artist.image} alt={artist.name} />
                </div>
                <div className="artist-info">
                  <h3 className="artist-name">{artist.name}</h3>
                  <p className="artist-followers">
                    Followers: {artist.followers}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="albums-section">
            <p className="albums-info">
              Guarda tus álbumes favoritos de{" "}
              <span className="artist-highlight">[artistName]</span>
            </p>

            <div className="albums-grid">
              {mockArtists.flatMap((artist) =>
                artist.albums.map((album) => (
                  <div key={album.id} className="album-card">
                    <div className="album-image">
                      <img
                        src={`https://picsum.photos/200/200?random=${
                          album.id + 10
                        }`}
                        alt={album.name}
                      />
                    </div>
                    <div className="album-info">
                      <h4 className="album-name">{album.name}</h4>
                      <p className="album-date">Publicado: {album.date}</p>
                      <button className="add-album-btn">+ Add album</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pagination">
            <button className="page-btn">&lt;</button>
            <button className="page-btn">10</button>
            <button className="page-btn">11</button>
            <button className="page-btn">12</button>
            <button className="page-btn active">13</button>
            <button className="page-btn">14</button>
            <button className="page-btn">15</button>
            <button className="page-btn">&gt;</button>
          </div>
        </div>
      </main>
    </div>
  );
};
