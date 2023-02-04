import { createContext, useState } from "react";

export const FORM_TYPE = {
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  ADD_USER: "ADD_USER",
  EDIT_USER: "EDIT_USER",
};

export const UIContext = createContext({
  isModalOpen: false,
  setModal: () => {},
  formType: null,
  setFormType: () => {},
});

export const UIProvider = ({ children }) => {
  const [isModalOpen, setModal] = useState();
  const [formType, setFormType] = useState("");

  const value = {
    isModalOpen,
    setModal,
    formType,
    setFormType,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
