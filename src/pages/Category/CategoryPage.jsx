import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Product from "../../components/Product/Product";
import axios from "axios";
import style from "../product-page.module.css";
function CategoryPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/categories/${id}/products`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryData();
  }, [id]);
  return (
    <div className={style.container}>
      {data.length === 0 && !isLoading && <h2>No products found</h2>}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data.map((categoryData) => (
        <Product product={categoryData} key={categoryData.id} />
      ))}
    </div>
  );
}
export default CategoryPage;
