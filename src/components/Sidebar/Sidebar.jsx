import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <img src="/logo/setting 1.png" alt="" />
        <img src="/logo/Dashboard.png" alt="" />
        <p>v.01</p>
      </div>

      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <div className="sidebar__menu-item-content">
            <img src="/List_Icons/key_in_square.png" alt="" />
            <span>Dashboard</span>
            <span className="sidebar__menu-item-arrow"></span>
          </div>
        </li>
        <li className="sidebar__menu-item">
          <div className="sidebar__menu-item-content">
            <img src="/List_Icons/3d-square 1.png" alt="" />
            <span>Product</span>
            <span className="sidebar__menu-item-arrow"></span>
          </div>
        </li>
        <li className="sidebar__menu-item">
          <div className="sidebar__menu-item-content">
            <img src="/List_Icons/user-square 1.png" alt="" />
            <span>Customers</span>
            <span className="sidebar__menu-item-arrow"></span>
          </div>
        </li>
        <li className="sidebar__menu-item">
          <div className="sidebar__menu-item-content">
            <img src="/List_Icons/wallet-money 2.png" alt="" />
            <span>Income</span>
            <span className="sidebar__menu-item-arrow"></span>
          </div>
        </li>
        <li className="sidebar__menu-item">
          <div className="sidebar__menu-item-content">
            <img src="List_Icons/discount-shape 1.png" alt="" />
            <span>Promote</span>
            <span className="sidebar__menu-item-arrow"></span>
          </div>
        </li>
        <li className="sidebar__menu-item">
          <div className="sidebar__menu-item-content">
            <img src="/List_Icons/message-question 1.png" alt="" />
            <span>Help</span>
            <span className="sidebar__menu-item-arrow"></span>
          </div>
        </li>
      </ul>

      <div className="sidebar__user">
        <img src="/User-Avatar/Ellipse 8.png" alt="" className="sidebar__user-avatar" />
        <div className="sidebar__user-info">
          <span className="sidebar__user-name">Evano</span>
          <span className="sidebar__user-role">Project Manager</span>
        </div>
      </div>
    </nav>
  );
}
