import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import SellerCenter from "./pages/SellerCenter";
import Order from "./pages/Order";
import SalesProduct from "./components/Dashboard/SalesProduct/SalesProduct";
import OrderShip from "./components/Dashboard/OrderShip/OrderShip";
import Ask from "./components/Dashboard/Ask/Ask";
import Stats from "./components/Dashboard/Stats/Stats";
import Setting from "./components/Dashboard/Setting/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
