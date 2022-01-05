import React from "react";

export const MercadoLibreContext = React.createContext()

export const MercadoLibreProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const store = {
    products,
    setProducts,
    categories,
    setCategories,
    searchLoading,
    setSearchLoading
  }
  return <MercadoLibreContext.Provider value={store}>
    {children}
  </MercadoLibreContext.Provider>
};

export const useContexData = () => {
  const contextData = React.useContext(MercadoLibreContext);
  if(contextData === undefined){
    throw new Error ('Context is not defined')
  }
  return contextData
};
