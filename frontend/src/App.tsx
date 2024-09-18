import React, {  } from "react";
import "./index.css"; // Import Tailwind styles
import Navbar from "./Components/NavBar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";



function App() {
  

  return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
  );
}

export default App;
