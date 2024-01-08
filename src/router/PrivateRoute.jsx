import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ children }) => {
  const { state } = useLocation();
  console.log("state", state);

  return state?.logged ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = { children: PropTypes.node.isRequired };


