import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import { Login, ResetPassword, SolutionGeneration, Dashboard } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import { OptimizationResult } from "../pages/optimization-results/OptimizationResults";

export const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />  
        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />
        <Route
          path="/optimization-result"
          element={
            <OptimizationResult />
          }
        />
        <Route
          path="/solution-generation"
          element={<PrivateRoute>
            <SolutionGeneration />
          </PrivateRoute>}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}
        />
      </Routes>
    </Router>
  );
};



