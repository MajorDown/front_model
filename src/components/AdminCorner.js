import React, { useState, useEffect, useRef } from "react";
import adminBtnOff from "../images/adminIcons/adminBtnOff.png";
import adminBtnOn from "../images/adminIcons/adminBtnOn.png";
import connectBtn from "../images/adminIcons/connectBtn.png";
import disconnectBtn from "../images/adminIcons/disconnectBtn.png";

const AdminCorner = () => {
  const adminCorner = useRef();
  const [isOpen, setisOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [userId, setUserId] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputMdp, setInputMdp] = useState("");

  useEffect(() => {
    if (localStorage.getItem("AppUserId")) {
      setUserId(localStorage.getItem("AppUserId"));
      setIsConnected(true);
    } else {
      setUserId("");
      setIsConnected(false);
    }
  }, [localStorage.getItem("AppUserId")]);

  useEffect(() => {
    if (isOpen) {
      adminCorner.current.classList.add("isOpen");
    } else {
      adminCorner.current.classList.remove("isOpen");
    }
  }, [isOpen]);

  const handleLogin = async () => {
    const userId = inputId;
    const password = inputMdp;

    // Faire une demande au serveur pour authentifier l'utilisateur.
    const res = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        password,
      }),
    });

    // Vérifier si la demande a été un succès.
    if (res.status === 200) {
      // L'utilisateur est authentifié, stocker son jeton dans localStorage.
      const item = await res.json();
      localStorage.setItem("AppUserId", item.userId);
      localStorage.setItem("AppToken", item.token);
    } else {
      // L'utilisateur n'est pas authentifié, afficher un message d'erreur.
      alert("Échec de la connexion");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("AppToken");
    localStorage.removeItem("AppUserId");
  };

  return (
    <div id="adminCorner" ref={adminCorner}>
      <button onClick={() => setisOpen(!isOpen)}>
        <img
          id="adminBtn"
          src={isConnected ? adminBtnOn : adminBtnOff}
          alt="admin icon"
          width={30}
          height={30}
        />
      </button>
      {isOpen && (
        <div>
          {isConnected ? (
            <div id="adminForm">
              <p>mode Admin : {userId}</p>
              <button onClick={handleLogout}>
                <img
                  id="disconnectBtn"
                  src={disconnectBtn}
                  alt="Déconnection"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          ) : (
            <div id="adminForm">
              <input
                id="userId"
                name="userId"
                type="text"
                placeholder="identifiant"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="mot de passe"
                value={inputMdp}
                onChange={(e) => setInputMdp(e.target.value)}
              />
              <button onClick={handleLogin}>
                <img
                  id="connectBtn"
                  src={connectBtn}
                  alt="Connection"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminCorner;
