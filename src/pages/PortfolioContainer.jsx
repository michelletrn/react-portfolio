import React, { useState } from "react";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
// import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
// import Menu from "../components/Menu";
import "../App.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("home");

  // console.log(currentPage);
  return (
    <>
      {/* passing the currentPage from state  as prop and the function to update it */}
      {/* <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* <div id="content-container"> */}
      {currentPage === "home" && (
        <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "about" && <About />}
      {currentPage === "portfolio" && <Portfolio />}
      {/* {currentPage === "contact" && <Contact />} */}
      <Sidebar />
      {/* </div> */}
      <Footer />
    </>
  );
}
