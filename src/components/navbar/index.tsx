import React from "react";
import Logo from "../../assets/images/Group (1).png";
import NotificationIcon from "../../assets/images/notifications.png";
import avatar from "../../assets/images/no image.png";
import "./navbar.css";

function NavBar({ active }: any) {
  return (
    <div className="navbar-root">
      <div>
        <img src={Logo} alt="" className="nav-logo" />
      </div>
      <div className="nav-menu-parent">
        <div className="nav-menu">
          <div>Dashboard</div>

          <div>Tracking</div>

          <div>Users</div>

          <div>Drivers&Fleets</div>

          <div> Payments</div>
          <div>Promotions</div>
        </div>
      </div>
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
  );
}

export default NavBar;
