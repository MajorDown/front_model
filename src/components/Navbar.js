import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/infos">Infos</Link>
    </nav>
  );
};

export default Navbar;
