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
import AddProduct from "./pages/AddProduct";

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
            <Route path="/sellercenter/dashboard" element={<SellerCenter />}>
              <Route
                path="/sellercenter/dashboard/salesproduct"
                element={<SalesProduct />}
              />
              <Route
                path="/sellercenter/dashboard/ordership"
                element={<OrderShip />}
              />
              <Route path="/sellercenter/dashboard/ask" element={<Ask />} />
              <Route path="/sellercenter/dashboard/stats" element={<Stats />} />
              <Route
                path="/sellercenter/dashboard/setting"
                element={<Setting />}
              />
            </Route>
            <Route path="/sellercenter/addproduct" element={<AddProduct />} />
          </Route>
          <Route element={<PrivateRoutesBuyer authorization={userType} />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Route>
          <Route path="/mypage" element={<MyPage authorization={token} />} />
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
