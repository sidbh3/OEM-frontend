import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Vendors from "./pages/Vendor";
import Components from "./pages/Components";
import Login from "./components/Form/Login";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import OrderPage from "./pages/OrderPage";
import OnboardForm from "./components/OnboardForm";
import EmployForm from "./components/Form/EmployForm";
import DashboardPage from "./pages/DashboardPage";
import RequestVendorTablePage from "./pages/RequestVendorTablePage";
import RequestOemTablePage from "./pages/RequestOemTablePage";
import Info from "./pages/Info";
import Bill from "./pages/Bill";
import SignUp from "./pages/SignUp";
import NewPass from './pages/NewPass';

import ResetPassword from "./pages/ResetPassword";
import Forms from "./pages/Forms";
import ResetConfirmation from "./components/Form/ResetConfirmation";
import NewPassword from "./components/Form/NewPassword";
import Reset from "./components/Form/Reset";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login  />} /> */}
       
  
        <Route path="/login" element={<Login />} />
        <Route path="/document" element={<Forms/>} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/components" element={<Components />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/reset-confirmation" element={<ResetConfirmation />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
        <Route path="/request" element={<RequestOemTablePage />} />
        <Route path="/oem-request" element={<RequestOemTablePage />} />
        <Route path="/vendor-request" element={<RequestVendorTablePage />} />
        <Route path="/employee-form" element={<EmployForm />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/newpassword" element={<NewPass />} />

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
