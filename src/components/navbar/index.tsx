import React from "react";
import NotificationIcon from "../../assets/images/notification.png";
import avatar from "../../assets/images/avatar.png";
import search from "../../assets/images/Search.png";
import "./navbar.css";

function NavBar({ active }: any) {
  return (
    <div className="navbar-root">
      <div>
        <div className="nav-logo">TransMonitor</div>
      </div>
      <div className="nav-menu-parent">
        <div className="nav-menu">
          <div>
            <label>
              <img src={search} />
            </label>
            <input placeholder="Search..." disabled />
          </div>
        </div>
      </div>
      <div className="left-side">
        <div>Support</div>
        <div>FAQ</div>
        <div className="accounts">
          <div>
            <img src={NotificationIcon} alt="" />
          </div>
          <div className="avatar-details">
            <img src={avatar} alt="" />
            <div>
              <div>Obasi Adekunle</div>
              <div>Super Admin</div>
            </div>
          </div>
          <div className="arrow-down"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
