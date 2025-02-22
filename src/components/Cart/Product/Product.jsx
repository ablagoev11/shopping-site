import style from "./product.module.css";
import { useCart } from "../../../providers/CartProvider";
import PropTypes from "prop-types";
function Product({ product }) {
  const { removeCart, addQuantity, decreaseQuantity } = useCart();
  return (
    <div className={style.container}>
      <img src={product.images[0]} alt="" className={style["product-image"]} />
      <h2>{product.title}</h2>
      <div className={style["product-details"]}>
        <p>{product.price * product.quantity}$</p>
        <div className={style["quantity-container"]}>
          <button
            className={style.decrease}
            disabled={product.quantity === 1}
            onClick={() => {
              if (product.quantity > 1) decreaseQuantity(product.id);
            }}
          >
            -
          </button>
          <p>{product.quantity}</p>
          <button onClick={() => addQuantity(product.id)}>+</button>
          <button
            className={style.delete}
            onClick={() => {
              removeCart(product.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default Product;
