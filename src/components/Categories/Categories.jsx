import SidePanel from "../SidePanel/SidePanel";
import image from "../../assets/fi-xwluxl-three-bars-wide.svg";
import { useCategoriesData } from "../../providers/CategoriesDataProvider";
import style from "./categories.module.css";
function Categories() {
  const { data, isLoading, error } = useCategoriesData();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <SidePanel image={image} name={"category"} position={"left"} full={true}>
      <div className={style.categories}>
        {data.map((category) => (
          <button key={category}>{category} </button>
        ))}
      </div>
    </SidePanel>
  );
}
export default Categories;
