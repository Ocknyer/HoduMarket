import { useRecoilState } from 'recoil';
import { userTypeValue } from '../../atoms';
import UserSignUp from '../../components/User/UserSignUp/UserSignUp';

const Signup = () => {
  const [userType, setUserType] = useRecoilState(userTypeValue);

  const handleUserType = (e) => {
    e.target.id === 'BUYER'
      ? setUserType('BUYER')
      : setUserType('SELLER');

    console.log(userType);
  };

  return (
    <>
      <UserSignUp onClick={handleUserType}></UserSignUp>
    </>
  );
};

export default Signup;
