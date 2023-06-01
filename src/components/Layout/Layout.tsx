import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userTypeValue } from '../../atoms';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export type UserType = string;

const Layout = () => {
  const userType = useRecoilValue<UserType>(userTypeValue);

  return (
    <>
      <Header userType={userType} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
