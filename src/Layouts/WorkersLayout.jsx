import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../ReUsables/SideBar";
import TopBar from "../ReUsables/TopBar";

const WorkersLayout = ({ role }) => {
  const location = useLocation();

  const sectionMap = {
    "/owners/dashboard": "Dashboard",
    "/owners/inventory": "Inventory",
    "/owners/expenses": "Expenses",
    "/owners/employees": "Employees",
    "/owners/controls": "Controls",
    "/owners/settings": "Settings",

    "/managers/dashboard": "Dashboard",
    "/managers/inventory": "Inventory",
    "/managers/expenses": "Expenses",
    "/managers/employees": "Employees",
    "/managers/controls": "Controls",
    "/managers/settings": "Settings",

    "/cashiers/dashboard": "Dashboard",
    "/cashiers/sales": "Sales",
    "/cashiers/inventory": "Inventory",
    "/cashiers/settings": "Settings",
    "/cashiers/expenses": "Expenses",
    "/cashiers/controls": "Controls",

    "/servers/dashboard": "Dashboard",
    "/servers/sales": "Sales",
    "/servers/inventory": "Inventory",
    "/servers/controls": "Controls",
    "/servers/settings": "Settings",
  };

  const currentSection = sectionMap[location.pathname] || "Dashboard";

  return (
    <>
      <div className="flex">
        <SideBar role={role} />
        <div className="flex flex-col">
          {/* Pass userRole to TopBar */}
          <TopBar currentSection={currentSection} role={role} />
        </div>
      </div>
      <div className="pt-20 lg:pl-56 px-5 lg:pb-[110px] pb-32 bg-gray-100">
        <Outlet />
      </div>
    </>
  );
};

export default WorkersLayout;
