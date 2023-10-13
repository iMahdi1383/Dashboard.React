import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const ClickableItems = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [isMenuActivated, setIsMenuActivated] = useState(true);
  const [isClicked, setIsClicked] = useState(ClickableItems);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clickedItem) => {
    setIsClicked({ ...ClickableItems, [clickedItem]: true });
  };

  return (
    <StateContext.Provider
      value={{
        isMenuActivated,
        setIsMenuActivated,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
