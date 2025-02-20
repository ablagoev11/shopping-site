import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProductsDataContext = createContext(null);

function ProductsDataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductsDataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ProductsDataContext.Provider>
  );
}

const useProductsData = () => useContext(ProductsDataContext);

export { ProductsDataProvider, useProductsData, ProductsDataContext };
