import { Fragment, useState } from "react";
import style from "./panel.module.css";
import closeImage from "../../assets/211652_close_icon.svg";

function SidePanel({ image, name, position, full = true, children }) {
  const [open, setOpen] = useState(false);

  const positionClass = `${full ? "full-" : ""}${position}`;
  const openClass = open ? "closed" : "";
  const panelClass = `${style[openClass] || ""} ${
    style[positionClass] || ""
  }`.trim();
  const panelContainerClass = `${style["panel-container"]}${
    open ? "" : style["closed-panel"]
  }`.trim();

  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className={style["panel-button"]}
      >
        <img src={image} alt={name} />
      </button>
      <div
        className={panelContainerClass}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className={panelClass} onClick={(e) => e.stopPropagation()}>
          <div className={style["close-button-container"]}>
            <button onClick={() => setOpen(false)} className={style.close}>
              <img src={closeImage} alt="close" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
