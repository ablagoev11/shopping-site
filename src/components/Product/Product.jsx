import style from "./product.module.css";
import { useCart } from "../../providers/CartProvider";
import PropTypes from "prop-types";
function Product({ product }) {
  const { addCart } = useCart();
  return (
    <div className={style.product}>
      <div className={style["image-container"]}>
        <img
          src={product.images[0]}
          alt=""
          className={style["product-image"]}
        />
      </div>
      <h2>{product.title}</h2>
      <p>{product.price}$</p>
      <button onClick={() => addCart(product)}>Add to cart</button>
    </div>
  );
}
Product.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};
export default Product;
