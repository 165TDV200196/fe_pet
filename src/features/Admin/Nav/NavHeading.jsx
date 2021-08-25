import React, { useState } from "react";
import { bar, bell, close, group } from "../svg/IconSvg";
import img1 from "../../../images/pet8.jpg";
import { useRef } from "react";
import { useEffect } from "react";
import { clickBar } from "./NavJs";
export default function NavHeading() {
  const barEl = useRef(null);
  useEffect(() => {
    clickBar(barEl.current);
  }, []);
  const [checkBar, setCheckBar] = useState(true);
  const hangdleClickBar = () => {
    setCheckBar(!checkBar);
  };
  return (
    <div className="Navheading">
      <div className="bar" onClick={hangdleClickBar} ref={barEl}>
        {checkBar ? bar : close}
      </div>
      <ul>
        <li>
          <div className="notification">{bell}</div>
        </li>
        <li>
          <div className="contact">{group}</div>
        </li>
        <li>
          <div className="avatar">
            <img src={img1} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
}
