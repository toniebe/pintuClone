import React, { useState } from "react";
import { currenciesProps } from "../types/supportedCurrencies";
import { AppContext } from "./AppContext";

interface AppProviderProps {
  value: any;
  children: React.ReactNode;
}

const AppProvider = ({ value, children }: AppProviderProps) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
