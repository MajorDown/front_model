"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleIsSidebarOpen = () => {
    if (isSidebarOpen) setIsSidebarOpen(false);
    if (!isSidebarOpen) setIsSidebarOpen(true);
  };
  return (
    <aside>
      <button onClick={handleIsSidebarOpen}>
        {isSidebarOpen ? "Fermer " : "Ouvrir "}la Sidebar
      </button>
      {isSidebarOpen && (
        <ul>
          <li>
            <Link to="https://www.google.fr">Google</Link>
          </li>
          <li>
            <Link to="https://www.facebook.com">Facebook</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com">LinkedIn</Link>
          </li>
          <li>
            <Link to="https://www.twitter.com">Twitter</Link>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
