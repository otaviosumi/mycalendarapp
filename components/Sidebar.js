import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li>
              <NavLink
                exact
                to={val.link}
                key={key}
                className="row"
                // id={window.location.pathname == val.link ? "active" : ""}
                // onClick={() => {
                //   window.location.pathname = val.link;
                // }}
              >
                {" "}
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
