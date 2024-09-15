import React from "react";

function NavNotice() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number bg-danger">4</span>
      </a>


      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View All
            </span>
          </a>
        </li>
        <li>
            <hr className="dropdown-divider"/>
        </li>


        <li className="notification-item">
            <i className="bi bi-exclamation-circle text-warning"></i>
            <div>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit?</p>
                <p>38 min. ago</p>
            </div>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
