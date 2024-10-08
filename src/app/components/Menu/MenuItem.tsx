'use client';

import { Button } from '@mui/material';

const MenuItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        fontSize: 28,
      }}
      color={'primary'}
      variant="text"
    >
      {label}
    </Button>
  );
};

export default MenuItem;
