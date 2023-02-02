import { createContext, useState } from "react";

export const UIContext = createContext({
  isModalOpen: false,
  setModal: () => {},
});

export const UIProvider = ({ children }) => {
  const [isModalOpen, setModal] = useState();

  const value = {
    isModalOpen,
    setModal,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
