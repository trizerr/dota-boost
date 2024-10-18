import { Stack, StackProps } from '@mui/system';
import { Typography } from '@mui/material';

const ItemWithLabel = ({
  label,
  value,
  containerProps,
}: {
  label: string;
  value: string | number;
  containerProps?: StackProps;
}) => {
  return (
    <Stack
      pb={16}
      pt={6}
      spacing={6}
      {...containerProps}
      alignItems={'center'}
      bgcolor={'#161616'}
      px={16}
    >
      <Typography color={'white'} fontSize={16}>
        {label}
      </Typography>
      <Typography color={'white'} fontSize={32} fontWeight={'bold'}>
        {value}
      </Typography>
    </Stack>
  );
};

export default ItemWithLabel;
