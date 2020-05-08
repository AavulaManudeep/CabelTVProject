import React from "react"

const LoginContext = React.createContext();

const LoginContextProvider = LoginContext.Provider

const LoginContextConsumer = LoginContext.Consumer

export {LoginContextConsumer,LoginContextProvider,LoginContext}