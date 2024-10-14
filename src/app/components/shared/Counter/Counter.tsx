import { Stack } from '@mui/system';
import { Button, ButtonBase, Typography } from '@mui/material';
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
      display={'flex'}
      flexGrow={1}
      pt={6}
      pb={9}
    >
      <Typography textAlign={'center'} fontSize={16} pb={5}>
        {label}
      </Typography>
      <Stack
        flexDirection={'row'}
        display={'flex'}
        flexGrow={1}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <ButtonBase
          onClick={onMinus}
          sx={{
            width: '23px',
            minWidth: 0,
          }}
        >
          <Image src={MinusIcon} alt={'Minus'} />
        </ButtonBase>
        <Typography lineHeight={'32px'} fontWeight={'bold'} fontSize={'32px'}>
          {value}
        </Typography>
        <ButtonBase
          sx={{
            width: '23px',
            minWidth: 0,
          }}
          onClick={onPlus}
        >
          <Image src={PlusIcon} alt={'Plus'} />
        </ButtonBase>
      </Stack>
    </Stack>
  );
};

export default Counter;
