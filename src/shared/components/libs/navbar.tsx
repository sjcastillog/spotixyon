// import React from "react";
import { useLocation } from "react-router-dom";
import type { NavbarProps } from "../../interfaces";
import "../../css/navbar.css";

export const Navbar = ({ isLogin = false }: NavbarProps) => {
  const { pathname } = useLocation();

  if (!isLogin)
    return (
      <header className="search-header">
        <a className="logo">SPOTIXYON</a>
        <a className="login-btn" href="/searcher">
          Login
        </a>
      </header>
    );

  return (
    <header className="search-header">
      <a className="logo" href="/">
        SPOTIXYON
      </a>
      <nav className="nav-menu">
        <a
          href="/searcher"
          className={`nav-link ${pathname === "/searcher" ? "active" : ""}`}
        >
          Buscar
        </a>
        <a
          href="/albums"
          className={`nav-link ${pathname === "/albums" ? "active" : ""}`}
        >
          Mis álbumes
        </a>
        <a href="/" className="nav-link">
          Cerrar sesión
        </a>
      </nav>
      <div className="user-avatar">
        <span>N</span>
      </div>
    </header>
  );
};
