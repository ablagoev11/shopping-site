import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CategoriesDataContext = createContext(null);

function CategoriesDataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <CategoriesDataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </CategoriesDataContext.Provider>
  );
}

const useCategoriesData = () => useContext(CategoriesDataContext);

export { CategoriesDataProvider, useCategoriesData, CategoriesDataContext };
