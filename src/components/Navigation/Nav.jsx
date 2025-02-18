import { Link } from "react-router-dom";
import style from "./nav.module.css";
import SidePanel from "../SidePanel/SidePanel";
import image from "../../assets/shopping-bag-add-icon.svg";
function Nav() {
  return (
    <nav className={style.nav}>
      <Link to="/" className={style.link}>
        Home
      </Link>
      <SidePanel image={image} name={"cart"} position={"right"} full={false}>
        <h1>HAHAH</h1>
      </SidePanel>
    </nav>
  );
}
export default Nav;
