'use client';

import backgroundImage from '@/app/assets/job.png';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import JobExplain from '@/app/job/components/JobExplain';
import JobForm from '@/app/job/components/JobForm';
import Footer from '@/app/components/shared/Footer/Footer';
import Menu from '@/app/components/Menu/Menu';

const JobPage = () => {
  return (
    <Stack>
      <Menu />

      <Stack
        bgcolor={'#01000B'}
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        overflow={'hidden'}
        alignItems={'center'}
        pb={130}
      >
        <Stack width={'64vw'} alignItems={'center'} mt={'15vh'}>
          <Typography fontSize={40} fontWeight={'bold'}>
            Робота у Dota Boost
          </Typography>
          <Typography fontSize={64} fontWeight={'bold'}>
            Заробляй граючи в Dota 2
          </Typography>
          <Typography fontSize={40} pt={4} fontWeight={'bold'}>
            Наше ком’юніті бустерів шукає нових людей!
          </Typography>
          <Typography fontSize={40} fontWeight={'bold'} mt={100} mb={40}>
            Мінімальні вимоги до вас, та максимальна віддача від нас!{' '}
          </Typography>

          <JobExplain />

          <JobForm />
        </Stack>
      </Stack>
      <Footer gradientColors={['#655384', '#06020E']} />
    </Stack>
  );
};

export default JobPage;
