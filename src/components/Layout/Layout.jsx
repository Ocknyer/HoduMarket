import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userTypeValue } from '../../atoms';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  const userType = useRecoilValue(userTypeValue);

  return (
    <>
      <Header userType={userType} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
