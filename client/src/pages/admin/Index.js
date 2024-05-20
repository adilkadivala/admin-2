import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./Main";
import "../../assets/admin/css/style.css";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <section id="content" className={isSidebarOpen ? "" : "full-width"}>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Main />
      </section>
    </div>
  );
};

export default Index;
