import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const OrderButton = ({ price }: { price: number }) => {
  return (
    <Stack direction={'row'}>
      <Stack
        sx={{
          borderTopLeftRadius: '13px',
          borderBottomLeftRadius: '13px',
          border: '4px solid #693DC8',
          // paddingVertical: '30px',
          // paddingHorizontal: '36px',
        }}
        paddingX={'36px'}
        paddingY={'30px'}
      >
        <Typography fontSize={'32px'} fontWeight={'bold'}>
          Сума {price} грн
        </Typography>
      </Stack>
      <Button
        sx={{
          backgroundColor: '#693DC8',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <Typography fontSize={'32px'} fontWeight={'bold'}>
          Оформити замовлення
        </Typography>
      </Button>
    </Stack>
  );
};

export default OrderButton;
