import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Vendors from "./pages/Vendor";
import Components from "./pages/Components";
import Login from "./components/Forms/Login";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import OrderPage from "./pages/OrderPage";
import OnboardForm from "./components/OnboardForm";
import EmployForm from "./components/Forms/EmployForm";
import DashboardPage from "./pages/DashboardPage";
import RequestVendorTablePage from "./pages/RequestVendorTablePage";
import RequestOemTablePage from "./pages/RequestOemTablePage";
import Info from "./pages/Info";
import Bill from "./pages/Bill";
import SignUp from "./pages/SignUp";

import ResetPassword from "./pages/ResetPassword";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login  />} />
       
  
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/components" element={<Components />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
        <Route path="/request" element={<RequestOemTablePage />} />
        <Route path="/oem-request" element={<RequestOemTablePage />} />
        <Route path="/vendor-request" element={<RequestVendorTablePage />} />
        <Route path="/employee-form" element={<EmployForm />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route
          path="/oem-form"
          element={<OnboardForm topheading="OEM On-Boarding Form" />}
        />
        <Route
          path="/vendor-form"
          element={<OnboardForm topheading="Vendor On-Boarding Form" />}
        />
         <Route path="/BillSummary" element={<Bill/>} />
        <Route path="/MyInfo" element={<Info />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
