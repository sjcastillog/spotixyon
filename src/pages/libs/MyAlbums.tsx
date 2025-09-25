import React, { useState } from "react";
import "../css/albums.css";
import { Navbar } from "../../shared/components";
import { mockSavedAlbums } from "../mocks";

export const MyAlbums: React.FC = () => {
  const [savedAlbums, setSavedAlbums] = useState(mockSavedAlbums);

  const removeAlbum = (artistName: string, albumId: number) => {
    setSavedAlbums((prevAlbums) =>
      prevAlbums
        .map((artist) => ({
          ...artist,
          albums:
            artist.artistName === artistName
              ? artist.albums.filter((album) => album.id !== albumId)
              : artist.albums,
        }))
        .filter((artist) => artist.albums.length > 0)
    );
  };

  return (
    <div className="my-albums-container">
      <Navbar isLogin={true} />

      <main className="my-albums-main">
        <section className="title-section">
          <h1 className="page-title">
            Mis álbumes <br />
            <span className="highlight">guardados</span>
          </h1>

          <p className="page-description">
            Disfruta de tu música a un solo click y descubre qué <br />
            discos has guardado dentro de "mis álbumes"
          </p>
        </section>

        <section className="albums-by-artist-section">
          {savedAlbums.map((artist) => (
            <div key={artist.artistName} className="artist-albums-group">
              <h2 className="artist-section-title">{artist.artistName}</h2>

              <div className="artist-albums-grid">
                {artist.albums.map((album) => (
                  <div key={album.id} className="saved-album-card">
                    <div className="album-image">
                      <img src={album.image} alt={album.name} />
                    </div>

                    <div className="album-info">
                      <h3 className="album-name">{album.name}</h3>
                      <p className="album-date">Publicado: {album.date}</p>

                      <button
                        className="remove-album-btn"
                        onClick={() => removeAlbum(artist.artistName, album.id)}
                      >
                        Remove album
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {savedAlbums.length === 0 && (
          <div className="empty-state">
            <h3>No tienes álbumes guardados</h3>
            <p>
              Busca artistas y guarda tus álbumes favoritos para verlos aquí
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
