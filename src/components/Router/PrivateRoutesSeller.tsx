import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutesSeller = ({ authorization }) => {
  return authorization === 'SELLER' ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutesSeller;
