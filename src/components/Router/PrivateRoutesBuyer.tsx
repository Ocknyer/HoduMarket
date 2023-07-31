import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutesBuyer = ({ authorization }) => {
  return authorization === "BUYER" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutesBuyer;
