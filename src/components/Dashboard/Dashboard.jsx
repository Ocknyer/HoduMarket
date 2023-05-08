import { DashboardHeader } from './styleld';
import Button from '../common/Button/Button';
import DefaultWrapper from '../common/Wrapper/DefaultWrapper';

const Dashboard = () => {
  return (
    <DefaultWrapper>
      <DashboardHeader>
        <h2>
          대시보드 <span>백엔드글로벌</span>
        </h2>
        <Button size='md' width='168px'>
          상품 업로드
        </Button>
      </DashboardHeader>
    </DefaultWrapper>
  );
};

export default Dashboard;
