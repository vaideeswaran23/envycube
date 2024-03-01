import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";
import Home from "../Home";
import About from "../About";
import styles from "./App.module.scss";

const Services = () => <center>Services</center>;
const Works = () => <center>Works</center>;
const Contact = () => <center>Services</center>;

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <Routes>
          <Route exact path="/home" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/services" Component={Services} />
          <Route exact path="/works" Component={Works} />
          <Route exact path="/contact" Component={Contact} />
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
