import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export function NavbarProvider({ children }) {
  const [activeButton, setActiveButton] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <NavbarContext.Provider value={{
      activeButton, setActiveButton, showDropdown, setShowDropdown,
    }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
