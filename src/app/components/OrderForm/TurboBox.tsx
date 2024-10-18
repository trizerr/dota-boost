'use client';
import { Stack } from '@mui/system';
import theme from '@/app/styles/theme';
import { Checkbox, Typography } from '@mui/material';

const TurboBox = ({
  setIsTurbo,
  value,
}: {
  value: boolean;
  setIsTurbo: (value: boolean) => void;
}) => {
  return (
    <Stack
      bgcolor={theme.palette.secondary.dark}
      borderRadius={'13px'}
      flexDirection={'row'}
      padding={'18px 16px'}
      alignItems={'center'}
    >
      <Checkbox
        value={value}
        onClick={() => {
          setIsTurbo(!value);
        }}
      />
      <Typography fontWeight={'bold'} fontSize={'32px'} pl={'16px'}>
        Турбо режим
      </Typography>
      {/*<Stack bgcolor={theme.palette.secondary.light}>*/}
      <Stack ml={'11px'} justifyContent={'center'}>
        <Typography
          bgcolor={theme.palette.secondary.light}
          borderRadius={'12px'}
          padding={'5px 10px'}
        >
          +20%
        </Typography>
      </Stack>

      {/*</Stack>*/}
    </Stack>
  );
};

export default TurboBox;
