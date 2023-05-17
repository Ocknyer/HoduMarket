import { Box, Tab, styled } from '@mui/material';

const StyledTab = styled(Tab)`
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  width: 25%;
  height: 54px;
  display: flex;
  justify-content: center;
  border-bottom: 6px solid #e0e0e0;

  &:focus {
    color: #21bf48;
    border-bottom: 6px solid #21bf48;
  }
`;

const ProductTabs = () => {
  return (
    <Box display='flex' width='100%'>
      <StyledTab label='상품상세' />
      <StyledTab label='리뷰' />
      <StyledTab label='Q&A' />
      <StyledTab label='배송/교환정보' />
    </Box>
  );
};

export default ProductTabs;
