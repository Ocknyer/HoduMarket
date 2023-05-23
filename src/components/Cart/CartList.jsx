import { Box, Typography } from '@mui/material';
import CartItem from './CartItem';

const CartList = ({ cartLists, setCartLists, onClickModal, selected, MoveToOrderOne }) => {
  return (
    <>
      {cartLists.length > 0 ? (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '17px',
              width: '100%',
              m: '0',
              p: '35px 0',
            }}
          >
            {cartLists.map((item) => (
              <CartItem
                selected={selected}
                cartLists={cartLists}
                setCartLists={setCartLists}
                onClickModal={onClickModal}
                key={item.product_id}
                item={item}
                MoveToOrderOne={MoveToOrderOne}
              />
            ))}
          </Box>
        </>
      ) : (
        <Box p='200px 0' textAlign='center'>
          <Typography variant='h4' fontWeight='700' mb='17px'>
            장바구니에 담긴 상품이 없습니다.
          </Typography>
          <Typography variant='h6' component='p' color='text.secondary'>
            원하는 상품을 장바구니에 담아보세요!
          </Typography>
        </Box>
      )}
    </>
  );
};

export default CartList;
