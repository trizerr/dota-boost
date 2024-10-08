import { Stack } from '@mui/system';
import { Button, Typography } from '@mui/material';
import MinusIcon from '../../../assets/minus.png';
import PlusIcon from '../../../assets/plus.png';
import React from 'react';
import Image from 'next/image';
import theme from '@/app/styles/theme';

const Counter = ({
  label,
  onPlus,
  value,
  onMinus,
}: {
  label: string;
  onPlus: () => void;
  value: number;
  onMinus: () => void;
}) => {
  return (
    <Stack
      bgcolor={theme.palette.secondary.dark}
      paddingX={'30px'}
      borderRadius={'13px'}
      minWidth={250}
      display={'flex'}
      flexGrow={1}
    >
      <Typography textAlign={'center'} fontSize={16}>
        {label}
      </Typography>
      <Stack
        flexDirection={'row'}
        display={'flex'}
        flexGrow={1}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Button
          onClick={onMinus}
          sx={{
            width: '23px',
            minWidth: 0,
          }}
        >
          <Image src={MinusIcon} alt={'Minus'} />
        </Button>
        <Typography lineHeight={'32px'} fontWeight={'bold'} fontSize={'32px'}>
          {value}
        </Typography>
        <Button
          sx={{
            width: '23px',
            minWidth: 0,
          }}
          onClick={onPlus}
        >
          <Image src={PlusIcon} alt={'Plus'} />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Counter;
