import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
  };

  const value = {
    clickHandler,
    isClicked,
    setIsClicked,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
