import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import Sidebar from "./Components/Navbar/Sidebar";
import Hero from "./Components/Sections/Hero/Hero";
import { UserProvider } from "./Store/Context";

function App() {
  // jefe code
  return (
    <UserProvider>
      <div className="w-full h-screen pb-[2em] ">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="flex bg-[#F9FAFB]">
          <Sidebar />
          <Hero />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
