import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [files, setFiles] = useState("");
  const [file, setFile] = useState();

  const dragHandler = (e) => {
    e.preventDefault();
  };
  const dropHandler = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
    console.log("active");
  };

  const clickHandler = () => {
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
  };

  const value = {
    clickHandler,
    isClicked,
    setIsClicked,
    dragHandler,
    dropHandler,
    files,
    setFiles,
    file,
    setFile,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
