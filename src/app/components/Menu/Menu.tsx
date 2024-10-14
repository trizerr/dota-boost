'use client';

import { Stack } from '@mui/system';
import Image from 'next/image';
import { Typography } from '@mui/material';
// import { APP_TITLE } from '@/app/constants';
import MenuItem from '@/app/components/Menu/MenuItem';
import { useRouter } from 'next/navigation';

const Menu = () => {
  const router = useRouter();

  const isAuthorized = false; //todo: implement auth
  const menu = {
    items: [
      { label: 'Послуги', onClick: () => router.push('/') },
      { label: 'Робота', onClick: () => router.push('/job') },
      { label: 'Про нас', onClick: () => console.log('About') },
    ],
  };

  return (
    <Stack
      direction="row"
      alignItems={'center'}
      p={'4px'}
      justifyContent={'space-between'}
      sx={(theme) => ({
        background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.purple.main})`,
        paddingRight: '50px',
      })}
    >
      <Stack flexDirection={'row'} alignItems={'center'}>
        <Image src={require('../../assets/logo.png')} alt={'logo'} />
        <Typography fontSize={28} fontWeight={700} lineHeight={1}>
          Dota 2 <br />
          Boosting service
        </Typography>
      </Stack>

      <Stack
        sx={{
          flexGrow: 1,
        }}
        direction="row"
      >
        <Stack
          sx={{
            flexGrow: 1,
            maxWidth: 'calc(100vw - 300px)',
          }}
        />
        <Stack
          direction="row"
          spacing={'50px'}
          sx={{
            paddingRight: '50px',
            flexShrink: 0,
          }}
        >
          {menu.items.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
        </Stack>
        <Stack
          sx={{
            flexGrow: 1,
            maxWidth: '25vw',
          }}
        />
      </Stack>

      <Image
        src={isAuthorized ? '' : require('./../../assets/avatar.png')}
        alt={'profile'}
      />
    </Stack>
  );
};

export default Menu;
