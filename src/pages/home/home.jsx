import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRecoilValue } from "recoil";
import { userTypeValue } from "../../atoms";
import Banner from "../../components/Banner/Banner";
import ProductList from "../../components/Products/ProductList/ProductList";

const Home = () => {
  const userType = useRecoilValue(userTypeValue);
  // console.log(userType);

  return (
    <div>
      <Header userType={userType} />
      <div>
        <Banner />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
