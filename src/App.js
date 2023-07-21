import React from "react";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Sidebar />
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
