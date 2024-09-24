import "./index.css"; // Import Tailwind styles
import Navbar from "./Components/NavBar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import { AuthProvider } from "./Components/Blog/AuthContext";

function App() {
  


  return (
    <>
    <AuthProvider>
      <Navbar />
      <Outlet  /> 
      <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
