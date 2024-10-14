'use client';

import { Grid, Stack } from '@mui/system';
import JobFormItem from '@/app/job/components/JobFormItem';
import { Button, Typography } from '@mui/material';

const JobForm = () => {
  return (
    <Stack alignItems={'center'} mt={120}>
      <Typography fontSize={40} fontWeight={'bold'}>
        Стати Бустером!
      </Typography>
      <Typography
        pt={36}
        textAlign={'center'}
        fontSize={40}
        fontWeight={'bold'}
      >
        Заповніть заявку, і ми зв’яжемося з вами найближчим часом для
        консультації щодо умов працевлаштування.{' '}
      </Typography>
      <Stack mt={36} bgcolor={'rgba(22, 22, 22, 0.9)'} borderRadius={'30px'}>
        <Grid
          container
          bgcolor={'#242424'}
          py={40}
          px={64}
          borderRadius={'30px'}
          columnSpacing={120}
          rowSpacing={40}
        >
          <Grid size={6}>
            <JobFormItem label={'Ім’я'} placeholder={'Ваше Ім’я'} />
          </Grid>
          <Grid size={6}>
            <JobFormItem label={'Прізвище'} placeholder={'Ваше Прізвище'} />
          </Grid>
          <Grid size={6}>
            <JobFormItem
              label={'Номер Телефону'}
              placeholder={'Ваш Номер Телефону'}
            />
          </Grid>
          <Grid size={6}>
            <JobFormItem
              label={'Електронна Пошта'}
              placeholder={'Ваша Електронна Пошта'}
            />
          </Grid>
          <Grid size={6}>
            <JobFormItem label={'Telegram'} placeholder={'Ваш Telegram'} />
          </Grid>
          <Grid size={6}>
            <JobFormItem
              label={'Скільки часу готові працювати в день ?'}
              placeholder={'Кількість годин'}
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            my: 50,
            mx: 70,
          }}
        >
          Відправити заявку
        </Button>
      </Stack>
    </Stack>
  );
};

export default JobForm;
