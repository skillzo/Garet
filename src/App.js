import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Navbar/Sidebar";
import Hero from "./Components/Sections/Hero/Hero";
import { UserProvider } from "./Store/Context";
import Footer from "./Components/Footer/Footer";
import { Upload, UploadReady } from "./Components/Sections/Upload/Upload";
import UploadMain from "./Components/Sections/Upload/UploadMain";
import Home from "./Home";
import Dashboard from "./Dashboard";
import FileUploadtest from "./FileUploadtest";

function App() {
  // jefe code
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Dashboard />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
