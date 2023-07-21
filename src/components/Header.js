import React from "react";
import { Link } from "react-router-dom";
import AdminCorner from "./AdminCorner";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Link to={"/accueil"}>
        <h1>Titre du site</h1>
      </Link>
      <Navbar />
      <AdminCorner />
    </header>
  );
};

export default Header;
