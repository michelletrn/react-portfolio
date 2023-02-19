import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("about");

  console.log(currentPage);
  return (
    <div>
      {/* passing the currentPage from state  as prop and the function to update it */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {currentPage === "about" && (
        <About currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "contact" && <Contact />}
      <Footer />
    </div>
  );
}
