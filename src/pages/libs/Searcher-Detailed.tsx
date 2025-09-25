import React from "react";
import "../css/searcher-detailed.css";
import { Navbar } from "../../shared/components";
import { mockArtist } from "../mocks";

export const SearcherDetailed: React.FC = () => {
  const [albums, setAlbums] = React.useState(mockArtist.albums);

  const toggleFavorite = (albumId: number) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) =>
        album.id === albumId
          ? { ...album, isFavorite: !album.isFavorite }
          : album
      )
    );
  };

  return (
    <div className="artist-detail-container">
      <Navbar isLogin={true} />

      <main className="artist-main">
        <section className="artist-info-section">
          <div className="artist-profile">
            <div className="artist-image-large">
              <img src={mockArtist.image} alt={mockArtist.name} />
            </div>

            <div className="artist-details">
              <div className="verified-badge">
                <span className="check-icon">✓</span>
                <span>Artista certificado</span>
              </div>

              <h1 className="artist-name-large">{mockArtist.name}</h1>

              <div className="artist-stats">
                <p>Followers: {mockArtist.followers}</p>
                <p>Oyentes mensuales: {mockArtist.monthlyListeners}</p>
              </div>
            </div>

          </div>
        </section>

        <section className="albums-section">
          <h2 className="albums-title">
            Guarda tus álbumes favoritos de{" "}
            <span className="artist-highlight">{mockArtist.name}</span>
          </h2>

          <div className="albums-grid">
            {albums.map((album) => (
              <div key={album.id} className="album-card">
                <div className="album-image">
                  <img src={album.image} alt={album.name} />
                </div>

                <div className="album-info">
                  <h3 className="album-name">{album.name}</h3>
                  <p className="album-date">Publicado: {album.date}</p>

                  <button
                    className={`album-action-btn ${
                      album.isFavorite ? "remove" : "add"
                    }`}
                    onClick={() => toggleFavorite(album.id)}
                  >
                    {album.isFavorite ? "Remove album" : "+ Add album"}
                  </button>
                </div>
              </div>
            ))}
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
        </section>
      </main>
    </div>
  );
};
