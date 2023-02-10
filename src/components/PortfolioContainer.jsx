import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
