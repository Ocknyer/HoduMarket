import {
  DashboardHeader,
  DashboardSidebar,
  DashboardBody,
  DashboardMain,
} from './styleld';
import DefaultWrapper from '../common/Wrapper/DefaultWrapper';
import Plus from '../../assets/img/icon-plus.svg';

const Dashboard = () => {
  return (
    <DefaultWrapper>
      <DashboardHeader>
        <h2>
          대시보드 <span>백엔드글로벌</span>
        </h2>
        <button className='btn-add-product'>
          <img
            src={Plus}
            alt='상품 추가 아이콘'
            className='icon-plus'
          />
          상품 업로드
        </button>
      </DashboardHeader>
      <DashboardBody>
        <nav>
          <DashboardSidebar>
            <li className='active'>판매중인 상품</li>
            <li>주문/배송</li>
            <li>문의/리뷰</li>
            <li>통계</li>
            <li>스토어 설정</li>
          </DashboardSidebar>
        </nav>
        <DashboardMain>
          <div className='data-header'>
            <p className='product-info'>상품정보</p>
            <p className='product-price'>판매가격</p>
            <p className='edit-product'>수정</p>
            <p className='delete-product'>삭제</p>
          </div>
        </DashboardMain>
      </DashboardBody>
    </DefaultWrapper>
  );
};

export default Dashboard;
