import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../App.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("home");

  console.log(currentPage);
  return (
    <>
      {/* passing the currentPage from state  as prop and the function to update it */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* <div id="content-container"> */}
        {currentPage === "home" && (
        <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "about" && <About />}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "contact" && <Contact />}
      <Sidebar/>
      {/* </div> */}
      
      <Footer />
    </>
  );
}
