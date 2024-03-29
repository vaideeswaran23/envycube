import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import styles from "./App.module.scss";
import Works from "../Works";
import WorksDetail from "../WorksDetail";
import Contact from "../Contact";

function App() {
  // const onScroll = () => {
  //   const header = document.getElementById("header");
  //   const aboutPage = document.getElementById("about");
  //   if (aboutPage) {
  //     const { top } = aboutPage.getBoundingClientRect();
  //     if (top < -80) {
  //       header.classList.add("scrolled");
  //     } else {
  //       header.classList.remove("scrolled");
  //     }
  //   } else {
  //     header.classList.remove("scrolled");
  //   }
  // };
  return (
    <BrowserRouter>
      <div
        className={styles.App}
        // onScroll={onScroll}
      >
        <Header />
        <Routes>
          <Route exact path="/home" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/services" Component={Services} />
          <Route exact path="/works" Component={Works} />
          <Route exact path="/works/:id" Component={WorksDetail} />
          <Route exact path="/contact" Component={Contact} />
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
