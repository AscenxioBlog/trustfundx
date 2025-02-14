import React, { createContext, useContext } from 'react'


export const MycontextApp = createContext();

function ContextApp({children}) {
    const sharedValue = {}; // Define the value you want to provide
  return (
    <div>
      <MycontextApp.Provider value={sharedValue}>{children}</MycontextApp.Provider>
    </div>
  )
}

export default ContextApp
