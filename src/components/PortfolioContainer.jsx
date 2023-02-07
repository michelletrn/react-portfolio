import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  //const handlePageChange = (page) => setCurrentPage(page);
  console.log(currentPage);
  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {currentPage === "about" && <About />}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "contact" && <Contact />}
    </div>
  );
}
