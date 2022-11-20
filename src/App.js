import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import Sidebar from "./Components/Navbar/Sidebar";
import Hero from "./Components/Sections/Hero/Hero";
import { UserProvider } from "./Store/Context";
import Footer from "../src/Components/Footer/Footer.jsx";

function App() {
  // jefe code
  return (
    <UserProvider>
      <div className="w-full h-screen ">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="flex bg-[#F9FAFB]">
          <Sidebar />
          <Hero />
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
