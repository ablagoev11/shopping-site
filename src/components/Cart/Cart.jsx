import SidePanel from "../SidePanel/SidePanel";
import image from "../../assets/black-shopping-cart-10933.svg";

import style from "./cart.module.css";
import { useCart } from "../../providers/CartProvider";
import Product from "./Product/Product";
function Cart() {
  const { cart, checkoutCart } = useCart();
  const length = cart.reduce((acc, item) => acc + item.quantity, 0);
  const sum = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div>
      {length > 0 && <div className={style["cart-length"]}>{length}</div>}
      <SidePanel
        image={image}
        name={"cart"}
        position={"right"}
        full={false}
        container={style.cart}
      >
        <h2>Cart</h2>
        {length === 0 ? (
          <p>There are no items in your cart.</p>
        ) : (
          <div className={style["cart-content"]}>
            <div className={style["cart-container"]}>
              {cart.map((item) => (
                <Product key={item.id} product={item} />
              ))}
            </div>
            <h2>Total price: {sum}$</h2>
            <button
              className={style.checkout}
              onClick={() => {
                checkoutCart();
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </SidePanel>
    </div>
  );
}
export default Cart;
