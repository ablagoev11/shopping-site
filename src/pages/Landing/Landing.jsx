import Categories from "../../components/Categories/Categories";
import style from "./landing.module.css";
function Landing() {
  return (
    <div className={style.landing}>
      <Categories />
    </div>
  );
}
export default Landing;
