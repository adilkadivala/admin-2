import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [profileDropdown, setProfileDropdown] = useState(false);

  const handleProfileClick = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <nav className={isSidebarOpen ? "" : "full-width"}>
      <i className="bx bx-menu toggle-sidebar" onClick={toggleSidebar}></i>
      <form action="#">
        <div className="form-group">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search icon"></i>
        </div>
      </form>

      <span className="divider"></span>
      <div className="profile" onClick={handleProfileClick}>
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <ul className={`profile-link ${profileDropdown ? "show" : ""}`}>
          <li>
            <Link to="/">
              <i className="bx bxs-user-circle icon"></i> Profile
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="bx bxs-cog"></i> Settings
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="bx bxs-log-out-circle"></i> Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
