import { Link } from "react-router-dom";
import style from "./nav.module.css";
import Cart from "../Cart/Cart";
import logo from "../../assets/shoplogo-freelogovectors.net_.png";

function Nav() {
  return (
    <nav className={style.nav}>
      <Link to="/" className={style.link}>
        <img src={logo} alt="home" className={style.logo} />
      </Link>
      <Cart />
    </nav>
  );
}
export default Nav;
