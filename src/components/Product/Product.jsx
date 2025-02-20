import style from "./product.module.css";

function Product({ product }) {
  return (
    <div className={style.product}>
      <div className={style["image-container"]}>
        <img src={product.image} alt="" className={style["product-image"]} />
      </div>
      <h2>{product.title}</h2>
      <p>{product.price}$</p>
      <button>Add to cart</button>
    </div>
  );
}
export default Product;
