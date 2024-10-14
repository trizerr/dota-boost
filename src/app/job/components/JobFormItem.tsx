'use client';

import { Stack } from '@mui/system';
import { Input, Typography } from '@mui/material';

const JobFormItem = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <Stack spacing={16}>
      <Typography fontSize={32} fontWeight={'bold'}>
        {label}
      </Typography>
      <Input placeholder={placeholder} />
    </Stack>
  );
};

export default JobFormItem;
