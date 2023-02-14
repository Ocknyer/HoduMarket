import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/Products/ProductDetail/ProductDetail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productdetail' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
