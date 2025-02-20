import Categories from "../../components/Categories/Categories";
import style from "./landing.module.css";
function Landing({ children }) {
  return <div className={style.landing}>{children}</div>;
}
export default Landing;
