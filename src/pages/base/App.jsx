import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";
import Home from "../Home";
import About from "../About";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <main>
          <Routes>
            <Route exact path="/home" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route path="/" element={<Navigate to="/home" replace={true} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
