import { Stack } from '@mui/system';
import FooterItem from '@/app/components/shared/Footer/FooterItem';
import Link from 'next/link';
import React from 'react';

import TelegramIcon from '@/app/assets/telegramIcon.svg';
import InstagramIcon from '@/app/assets/instagram.svg';
import FacebookIcon from '@/app/assets/facebook.svg';
import YouTubeIcon from '@/app/assets/youtube1.svg';

const Footer = ({
  gradientColors = ['#655384', 'black'],
}: {
  gradientColors?: string[];
}) => {
  return (
    <Stack
      sx={{
        background: `linear-gradient(to top, ${gradientColors[0]}, ${gradientColors[1]})`,
      }}
      height={'380px'}
      alignItems={'center'}
      component={'footer'}
      justifyContent={'center'}
    >
      <Stack
        pt={'100px'}
        width={'64vw'}
        direction={'row'}
        alignItems={'center'}
        spacing={'20px'}
      >
        <Stack spacing={'10px'}>
          <InstagramIcon />
          <FacebookIcon />
        </Stack>
        <Stack spacing={'16px'} pr={42}>
          <TelegramIcon />
          <YouTubeIcon />
        </Stack>
        <Stack spacing={'20px'}>
          <FooterItem label={'Робота'} />
          <FooterItem label={'Партнерська програма'} />
          <FooterItem label={'Політика конфіденційності'} />
        </Stack>
        <Stack spacing={'20px'}>
          <FooterItem label={'Оплата'} />
          <FooterItem label={'Тренінги'} />
          <FooterItem label={'Умови праці'} />
        </Stack>
        <Stack spacing={'20px'}>
          <Link href={'/aboutMe'}>
            <FooterItem label={'© Решетник Назар'} />
          </Link>
          <FooterItem label={'+38(050)7806445'} />
          <FooterItem label={'dzghbfgsd@gmail.com'} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
