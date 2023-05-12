import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';

const SellerCenter = () => {
  const navigate = useNavigate();

  const onClickSalesProduct = () => {
    navigate('/sellercenter/salesproduct');
  };

  const onClickOrderShip = () => {
    navigate('/sellercenter/ordership');
  };

  const onClickAsk = () => {
    navigate('/sellercenter/ask');
  };

  const onClickStats = () => {
    navigate('/sellercenter/stats');
  };

  const onClickSetting = () => {
    navigate('/sellercenter/setting');
  };

  return (
    <>
      <Dashboard
        onClickSalesProduct={onClickSalesProduct}
        onClickOrderShip={onClickOrderShip}
        onClickAsk={onClickAsk}
        onClickStats={onClickStats}
        onClickSetting={onClickSetting}
      />
    </>
  );
};

export default SellerCenter;
