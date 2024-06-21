import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import OrgaPage from "../../pages/OrgaPage";
import PaymentPage from "../../pages/PaymentPage";
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/authentification" element={<LoginPage />} />
          <Route path="/inscription" element={<SignUpPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/organizer" element={<OrgaPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;