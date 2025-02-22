import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ProductsDataContext = createContext(null);

function ProductsDataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
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
    <ProductsDataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ProductsDataContext.Provider>
  );
}

const useProductsData = () => useContext(ProductsDataContext);

ProductsDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export { ProductsDataProvider, useProductsData, ProductsDataContext };
