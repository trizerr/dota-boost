import { Typography } from '@mui/material';

const FooterItem = ({ label }: { label: string }) => {
  return (
    <Typography
      fontSize={'32px'}
      lineHeight={'32px'}
      fontWeight={'bold'}
      textAlign={'left'}
    >
      {label}
    </Typography>
  );
};

export default FooterItem;
