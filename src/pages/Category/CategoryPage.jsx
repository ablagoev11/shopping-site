import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Product from "../../components/Product/Product";
import axios from "axios";
import style from "../product-page.module.css";
function CategoryPage() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryData();
  }, [category]);
  return (
    <div className={style.container}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data.map((categoryData) => (
        <Product product={categoryData} key={categoryData.id} />
      ))}
    </div>
  );
}
export default CategoryPage;
