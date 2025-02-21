import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import LandingTopbar from "./LandingTopbar";

const LandingLayout = ({ role }) => {
  const location = useLocation();

  const sectionMap = {
    "/": "Landing Page",
    "/landing/notifications": "Notifications",
    
  };

  const currentSection = sectionMap[location.pathname] || "Landing Page";

  return (
    <>
      
        <div className="flex flex-col bg-white z-50">
          {/* Pass userRole to TopBar */}
          <LandingTopbar currentSection={currentSection} role={role} />
        </div>
      <div className="pt-16 bg-gray-100">
        <Outlet />
      </div>
    </>
  );
};

export default LandingLayout;
