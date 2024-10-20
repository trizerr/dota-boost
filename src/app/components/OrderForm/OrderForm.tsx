'use client';

import { Grid, Stack } from '@mui/system';
import { useState } from 'react';
import MmrSlider from '@/app/components/OrderForm/MmrSlider';
import FormSelect from '@/app/components/shared/Select/FormSelect';
import { Typography } from '@mui/material';
import Counter from '@/app/components/shared/Counter/Counter';
import { MAX_MMR, MIN_MMR } from '@/app/constants';
import TurboBox from '@/app/components/OrderForm/TurboBox';
import OrderButton from '@/app/components/OrderForm/OrderButton';
import Link from 'next/link';

const serviceItems = {
  1: {
    label: 'Підвищити MMR',
    value: 1,
  },
  2: {
    label: 'Калібрування',
    value: 2,
  },
};

const serverItems = {
  1: {
    label: 'Europe',
    value: 1,
  },
  2: {
    label: 'US',
    value: 2,
  },
  3: {
    label: 'Asia',
    value: 3,
  },
};

const OrderForm = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([MIN_MMR, MAX_MMR]);
  const [service, setService] = useState<number | string>(1);
  const [server, setServer] = useState<number | string>(1);
  const [isTurbo, setIsTurbo] = useState(false);

  const onMmrChange =
    ({ isStart, delta }: { isStart: boolean; delta: number }) =>
    () => {
      setSliderValue((prevValues) => {
        const index = isStart ? 0 : 1;
        let newValue = prevValues[index] + delta;

        newValue = Math.min(Math.max(newValue, MIN_MMR), MAX_MMR);

        const newValues = [...prevValues];
        newValues[index] = newValue;

        if (newValues[0] > newValues[1]) {
          if (isStart) {
            newValues[1] = newValues[0];
          } else {
            newValues[0] = newValues[1];
          }
        }

        return newValues;
      });
    };

  const price = sliderValue[1] - sliderValue[0];

  return (
    <Stack
      sx={{
        backgroundColor: 'rgba(22, 22, 22, 0.9)',
        borderRadius: '36px',
      }}
    >
      <Stack
        sx={(theme) => ({
          backgroundColor: theme.palette.secondary.light,
          borderRadius: '36px',
          px: '16px',
          overflow: 'hidden',
          pt: '50px',
          pb: '36px',
        })}
      >
        <MmrSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <Grid
          columns={13}
          container
          direction={'row'}
          spacing={'18px'}
          mt={16}
          pt={2}
        >
          <Grid size={3}>
            <Counter
              onPlus={onMmrChange({ isStart: true, delta: 1 })}
              onMinus={onMmrChange({ isStart: true, delta: -1 })}
              label={'Початковий MMR'}
              value={sliderValue[0]}
            />
          </Grid>
          <Grid size={3}>
            <FormSelect
              items={Object.values(serverItems)}
              value={server}
              onChange={(event) => {
                setServer(event.target.value);
              }}
              label={'Сервер'}
              uniqueKey={'2'}
            />
          </Grid>
          <Grid size={4}>
            <FormSelect
              items={Object.values(serviceItems)}
              value={service}
              onChange={(event) => {
                setService(event.target.value);
              }}
              label={'Послуга'}
              uniqueKey={'1'}
            />
          </Grid>
          <Grid size={3}>
            <Counter
              onPlus={onMmrChange({ isStart: false, delta: 1 })}
              onMinus={onMmrChange({ isStart: false, delta: -1 })}
              label={'Кінцевий MMR'}
              value={sliderValue[1]}
            />
          </Grid>
        </Grid>
        <Stack
          direction={'row'}
          mt={'32px'}
          spacing={16}
          justifyContent={'space-between'}
        >
          <TurboBox value={isTurbo} setIsTurbo={setIsTurbo} />
          <Link
            href={{
              pathname: '/order',
              query: {
                startMmr: sliderValue[0],
                endMmr: sliderValue[1],
                // @ts-ignore
                service: serviceItems[service]?.label,
                // @ts-ignore
                server: serverItems[server]?.label,
                isTurbo: isTurbo,
                price,
              },
            }}
          >
            <OrderButton price={price} />
          </Link>
        </Stack>
      </Stack>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        mx={'60px'}
        my={'55px'}
        spacing={'120px'}
        alignItems={'center'}
      >
        <Typography
          fontSize={'64px'}
          fontWeight={'bold'}
          textAlign={'center'}
          lineHeight={'64px'}
          flexShrink={0}
        >
          Турбо Режим <br />
          +20%
        </Typography>
        <Typography fontSize={'32px'} textAlign={'left'} lineHeight={'32px'}>
          Заощадь свій час та насолоджуйся швидким виконанням замовлення. Наші
          професіонали досвідчені в галузі та готові зробити все можливе, щоб
          забезпечити тобі високу якість послуги і задоволення від отриманих
          результатів.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default OrderForm;
