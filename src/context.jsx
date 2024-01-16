import React, {useContext, createContext, useState} from "react";
const AppContext = createContext(); //returns a provider and a consumer.

const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return <AppContext.Provider value={{
    isModalOpen, isSidebarOpen, openModal, closeModal, openSidebar, closeSidebar,
  }}>
       {children}
    </AppContext.Provider>

}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
}
export {AppContext, AppProvider};

