import SidePanel from "../SidePanel/SidePanel";
import image from "../../assets/fi-xwluxl-three-bars-wide.svg";
import { useCategoriesData } from "../../providers/CategoriesDataProvider";
import style from "./categories.module.css";
import { Link } from "react-router-dom";
function Categories() {
  const { data, isLoading, error } = useCategoriesData();

  return (
    <SidePanel
      image={image}
      name={"category"}
      position={"left"}
      full={true}
      className={style.panel}
      buttonStyle={style["panel-button"]}
    >
      <div className={style.categories}>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className={style.link}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </SidePanel>
  );
}
export default Categories;
