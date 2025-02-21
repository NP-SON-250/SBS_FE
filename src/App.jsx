import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import OwnersWorkers from "./Layouts/OwnersWorker";
import ManagerWorkers from "./Layouts/ManagerWorkers";
import CashierWorkers from "./Layouts/CashierWorkers";
import ServerWorkers from "./Layouts/ServersWorker";

// Owners pages
import OwnersDash from "./Users/Owners/OwnersDash";
import OwnersEmp from "./Users/Owners/OwnersEmp";
import OwnersInv from "./Users/Owners/OwnersInv";
import OwnersExpe from "./Users/Owners/OwnersExpe";
import OwnersContr from "./Users/Owners/OwnersContr";
import OwnersSett from "./Users/Owners/OwnersSett";

// Manager pages
import ManagerDash from "./Users/Manager/ManagerDash";
import ManagerInv from "./Users/Manager/ManagerInv";
import ManagerExpe from "./Users/Manager/ManagerExpe";
import ManagerEmp from "./Users/Manager/ManagerEmp";
import ManagerContr from "./Users/Manager/ManagerContr";
import ManagerSett from "./Users/Manager/ManagerSett";

// Cashier pages
import CashierDash from "./Users/Cashier/CashierDash";
import CashiersContr from "./Users/Cashier/CashiersContr";
import CashiersExp from "./Users/Cashier/CashiersExp";
import CashiersInv from "./Users/Cashier/CashiersInv";
import CashiersSales from "./Users/Cashier/CashiersSales";
import CashiersSett from "./Users/Cashier/CashiersSett";

// Servers pages
import ServersDash from "./Users/Servers/ServerDash";
import ServersContr from "./Users/Servers/ServersContr";
import ServersSales from "./Users/Servers/ServersSales";
import ServersSett from "./Users/Servers/ServersSett";
import ServersInv from "./Users/Servers/ServersInv";


// Landing Page
import LandingPage from "./Landing/Landing";
import LandingNotify from "./Landing/LandingNotify";
import LandingLays from "./Landing/LandingLays";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="bg-white">
      <Routes>
      {/* Owners Routes */}
      <Route element={<OwnersWorkers />}>
        <Route path="/owners/dashboard" element={<OwnersDash />} />
        <Route path="/owners/inventory" element={<OwnersInv />} />
        <Route path="/owners/expenses" element={<OwnersExpe />} />
        <Route path="/owners/employees" element={<OwnersEmp />} />
        <Route path="/owners/controls" element={<OwnersContr />} />
        <Route path="/owners/settings" element={<OwnersSett />} />
      </Route>
      {/* Manager Routes */}
      <Route element={<ManagerWorkers />}>
        <Route path="/managers/dashboard" element={<ManagerDash />} />
        <Route path="/managers/inventory" element={<ManagerInv />} />
        <Route path="/managers/expenses" element={<ManagerExpe />} />
        <Route path="/managers/employees" element={<ManagerEmp />} />
        <Route path="/managers/controls" element={<ManagerContr />} />
        <Route path="/managers/settings" element={<ManagerSett />} />
      </Route>

      {/* Cashier Routes */}
      <Route element={<CashierWorkers />}>
        <Route path="/cashiers/dashboard" element={<CashierDash />} />
        <Route path="/cashiers/inventory" element={<CashiersInv />} />
        <Route path="/cashiers/sales" element={<CashiersSales />} />
        <Route path="/cashiers/expenses" element={<CashiersExp />} />
        <Route path="/cashiers/controls" element={<CashiersContr />} />
        <Route path="/cashiers/settings" element={<CashiersSett />} />
      </Route>

      {/* Servers Routes */}
      <Route element={<ServerWorkers />}>
        <Route path="/servers/dashboard" element={<ServersDash />} />
        <Route path="/servers/inventory" element={<ServersInv />} />
        <Route path="/servers/sales" element={<ServersSales />} />
        <Route path="/servers/controls" element={<ServersContr />} />
        <Route path="/servers/settings" element={<ServersSett />} />
      </Route>

      {/* Landing Routes */}
      <Route element={<LandingLays />}>
      <Route index element={<LandingPage />} />
        <Route path="/landing/notifications" element={<LandingNotify />} />
      </Route>
    </Routes>
      <footer className="p-3 text-center">
        <h6 className="mb-3">Npson- Alexis</h6>
        <p>alema soft © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
