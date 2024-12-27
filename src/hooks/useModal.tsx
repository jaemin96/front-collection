import React, { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  isOpen: { [key: string]: boolean };
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  handleOk?: () => void;
}

const defaultContextValue: ModalContextType = {
  isOpen: {},
  openModal: () => {},
  closeModal: () => {},
  handleOk: () => {},
};

const ModalContext = createContext<ModalContextType>(defaultContextValue);

export const ModalProvider: React.FC<ReactNode> = (children) => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const openModal = (modalId: string) =>
    setIsOpen((prev) => ({ ...prev, [modalId]: true }));
  const closeModal = (modalId: string) =>
    setIsOpen((prev) => ({ ...prev, [modalId]: false }));
  const handleOk = () => {
    console.log("OK");
    // setIsOpen((prev) => ({ ...prev, [modalId]: true }));
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, handleOk }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
