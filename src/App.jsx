import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import SellerCenter from "./pages/SellerCenter";
import Order from "./pages/Order";
import SalesProduct from "./components/Dashboard/DashboardItems/SalesProduct";
import OrderShip from "./components/Dashboard/DashboardItems/OrderShip";
import Ask from "./components/Dashboard/DashboardItems/Ask";
import Stats from "./components/Dashboard/DashboardItems/Stats";
import Setting from "./components/Dashboard/DashboardItems/Setting";
import MyPage from "./pages/MyPage";
import { useRecoilValue } from "recoil";
import { userTypeValue } from "./atoms";
import PrivateRoutesSeller from "./components/Router/PrivateRoutesSeller";
import PrivateRoutes from "./components/Router/PrivateRoutes";
import PrivateRoutesBuyer from "./components/Router/PrivateRoutesBuyer";

function App() {
  const userType = useRecoilValue(userTypeValue);
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route element={<PrivateRoutesSeller authorization={userType} />}>
            <Route path="/sellercenter" element={<SellerCenter />}>
              <Route
                path="/sellercenter/salesproduct"
                element={<SalesProduct />}
              />
              <Route path="/sellercenter/ordership" element={<OrderShip />} />
              <Route path="/sellercenter/ask" element={<Ask />} />
              <Route path="/sellercenter/stats" element={<Stats />} />
              <Route path="/sellercenter/setting" element={<Setting />} />
            </Route>
          </Route>
          <Route path="/mypage" element={<MyPage />} />
          <Route element={<PrivateRoutesBuyer authorization={userType} />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Route>
        <Route element={<PrivateRoutes authorization={token} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
