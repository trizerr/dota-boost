'use client';

import { Stack } from '@mui/system';
import Menu from '@/app/components/Menu/Menu';
import backgroundImage from './assets/mainPageBackground.png';
import OrderForm from '@/app/components/OrderForm/OrderForm';
import { Typography } from '@mui/material';
import BoostBlock from '@/app/components/BoostBlock/BoostBlock';
import BecomeBooster from '@/app/components/BecomeBooster/BecomeBooster';
import BoostBenefits from '@/app/components/BoostBenefits/BoostBenefits';
import VideoExample from '@/app/components/VideoExample/VideoExample';
import Footer from '@/app/components/shared/Footer/Footer';

export default function Home() {
  return (
    <Stack bgcolor={'black'} position={'relative'}>
      <Menu />

      <Stack
        width={'100%'}
        height={'1000px'}
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
        }}
        position={'relative'}
      >
        <Stack
          position={'absolute'}
          width={'100%'}
          top={'15vh'}
          overflow={'hidden'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Stack width={'64vw'}>
            <Stack
              width={'64vw'}
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'flex-end'}
              mb={'40px'}
            >
              <Stack>
                <Typography fontSize={'24px'} fontWeight={'bold'}>
                  Послуги · Покращення рейтингу!
                </Typography>
                <Typography
                  fontSize={'48px'}
                  fontWeight={'bold'}
                  lineHeight={'48px'}
                >
                  Замов Покращення <br />
                  ММR вже зараз!
                </Typography>
              </Stack>
              <Stack
                sx={(theme) => ({
                  backgroundColor: theme.palette.secondary.light,
                  opacity: 0.9,
                  borderRadius: 30,
                })}
                flexGrow={0}
                display={'block'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Typography paddingX={'80px'} paddingY={'26px'}>
                  100% гарантія <br /> конфеденційності
                </Typography>
              </Stack>
            </Stack>
            <OrderForm />
          </Stack>
        </Stack>
      </Stack>

      <BoostBlock />

      <BecomeBooster />

      <BoostBenefits />

      <Stack pb={'156px'}>
        <VideoExample />
      </Stack>

      <Footer />
    </Stack>
  );
}
