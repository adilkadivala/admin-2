import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <section id="sidebar" className={isOpen ? "open" : ""}>
      <Link to="#" className="brand">
        <i className="bx bxs-smile icon"></i> AdminSite
      </Link>
      <ul className="side-menu">
        <li>
          <Link to="#" className="active">
            <i className="bx bxs-dashboard icon"></i> Dashboard
          </Link>
        </li>
        <li className="divider" data-text="main">
          Pages
        </li>
        <li>
          <Link to="#" onClick={() => handleDropdownClick("elements")}>
            <i className="bx bxs-inbox icon"></i> Elements
            <i
              className={`bx bx-chevron-right icon-right ${
                openDropdown === "elements" ? "rotate" : ""
              }`}
            ></i>
          </Link>
          <ul
            className={`side-dropdown ${
              openDropdown === "elements" ? "show" : ""
            }`}
          >
            <li>
              <Link to="#">Alert</Link>
            </li>
            <li>
              <Link to="#">Badges</Link>
            </li>
            <li>
              <Link to="#">Breadcrumbs</Link>
            </li>
            <li>
              <Link to="#">Button</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="#">
            <i className="bx bxs-chart icon"></i> Charts
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="bx bxs-widget icon"></i> Widgets
          </Link>
        </li>
        <li className="divider" data-text="table and forms">
          Table and forms
        </li>
        <li>
          <Link to="#">
            <i className="bx bx-table icon"></i> Tables
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => handleDropdownClick("forms")}>
            <i className="bx bxs-notepad icon"></i> Forms
            <i
              className={`bx bx-chevron-right icon-right ${
                openDropdown === "forms" ? "rotate" : ""
              }`}
            ></i>
          </Link>
          <ul
            className={`side-dropdown ${
              openDropdown === "forms" ? "show" : ""
            }`}
          >
            <li>
              <Link to="#">Basic</Link>
            </li>
            <li>
              <Link to="#">Select</Link>
            </li>
            <li>
              <Link to="#">Checkbox</Link>
            </li>
            <li>
              <Link to="#">Radio</Link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
