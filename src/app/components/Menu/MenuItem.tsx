'use client';

import { Button, ButtonBase } from '@mui/material';

const MenuItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        fontSize: 28,
        //HOVER
        '&:hover': {
          color: '#693DC8',
        },
      }}
      color={'primary'}
    >
      {label}
    </ButtonBase>
  );
};

export default MenuItem;
