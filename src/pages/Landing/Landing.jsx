import style from "./landing.module.css";
import PropTypes from "prop-types";
function Landing({ children }) {
  return <div className={style.landing}>{children}</div>;
}
Landing.propTypes = {
  children: PropTypes.node,
};
export default Landing;
