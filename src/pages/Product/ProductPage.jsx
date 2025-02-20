import { useProductsData } from "../../providers/ProductsDataProvider";
import Product from "../../components/Product/Product";
import style from "../product-page.module.css";
function ProductPage() {
  const { data, isLoading, error } = useProductsData();

  return (
    <div className={style.container}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
export default ProductPage;
