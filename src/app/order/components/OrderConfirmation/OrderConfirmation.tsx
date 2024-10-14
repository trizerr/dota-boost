'use client';
import { Stack } from '@mui/system';
import ItemWithLabel from '@/app/components/ItemWithLabel/ItemWithLabel';
import { Input, Typography } from '@mui/material';
import Image from 'next/image';
import ApplePay from '@/app/assets/applePay.png';
import Card from '@/app/assets/card.png';

const OrderConfirmation = ({
  startMmr,
  endMmr,
  service,
  server,
  price,
  isTurbo,
}: {
  startMmr: string;
  endMmr: string;
  service: string;
  server: string;
  price: string;
  isTurbo: boolean;
}) => {
  console.log(isTurbo);
  return (
    <Stack direction={'row'}>
      <Stack
        bgcolor={'rgba(36, 36, 36, 0.9)'}
        pt={42}
        px={24}
        pb={18}
        width={'37vw'}
        sx={{
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Stack direction={'row'} spacing={8} width={'100%'} mb={8}>
          <ItemWithLabel
            containerProps={{
              flex: 1,
              sx: {
                borderTopLeftRadius: 15,
              },
            }}
            label={'Початковий MMR'}
            value={startMmr}
          />
          <ItemWithLabel
            containerProps={{
              flex: 1,
              sx: {
                borderTopRightRadius: 15,
              },
            }}
            label={'Кінцевий MMR'}
            value={endMmr}
          />
        </Stack>

        <Stack direction={'row'} spacing={8} width={'100%'}>
          <ItemWithLabel
            containerProps={{
              flex: 1,
              sx: {
                borderBottomLeftRadius: 15,
              },
            }}
            label={'Послуга'}
            value={service}
          />
          <ItemWithLabel
            containerProps={{
              flex: 1,
              sx: {
                borderBottomRightRadius: 15,
              },
            }}
            label={'Сервер'}
            value={server}
          />
        </Stack>

        <Stack
          mt={44}
          direction={'row'}
          justifyContent={'space-between'}
          px={34}
        >
          <Typography fontSize={32} color={'white'}>
            Підвищити MMR
          </Typography>
          <Typography fontSize={32} color={'white'}>
            {price}
          </Typography>
        </Stack>
        <Stack
          direction={'row'}
          mt={16}
          px={34}
          justifyContent={'space-between'}
        >
          <Typography fontSize={32} color={'white'}>
            Турбо режим
          </Typography>
          <Typography fontSize={32} color={'white'}>
            {price}
          </Typography>
        </Stack>
        <Stack mt={30} width={'100%'} bgcolor={'#161616'} height={4} />
        <Stack
          direction={'row'}
          mt={16}
          px={34}
          justifyContent={'space-between'}
        >
          <Typography fontSize={32} color={'white'} fontWeight={'bold'}>
            Час виконання
          </Typography>
          <Typography fontSize={32} color={'white'} fontWeight={'bold'}>
            Всього
          </Typography>
        </Stack>
        <Stack bgcolor={'#161616'} direction={'row'} mt={14} borderRadius={15}>
          <Stack
            flex={1}
            py={12}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography fontSize={32}>22 дні</Typography>
          </Stack>
          <Stack my={6} width={3} bgcolor={'#242424'} />
          <Stack
            flex={1}
            py={12}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography fontSize={32}>9600 грн</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width={'26vw'}
        bgcolor={'rgba(22, 22, 22, 0.9)'}
        sx={{
          borderBottomRightRadius: 30,
          borderTopRightRadius: 30,
        }}
        pt={42}
        px={24}
        pb={18}
      >
        <Typography fontSize={32} fontWeight={'bold'}>
          Контакт для зв&#39;язку
        </Typography>
        <Stack direction={'row'} mt={24}>
          <Typography fontSize={20}>Телефон</Typography>
          <Input
            sx={{
              marginLeft: 14,
            }}
            placeholder={'+380'}
          />
        </Stack>

        <Typography fontSize={32} fontWeight={'bold'}>
          Спосіб оплати
        </Typography>
        <Stack spacing={4} mt={16}>
          <Typography
            sx={{
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
            }}
            fontSize={32}
            bgcolor={'#242424'}
            py={20}
            px={15}
          >
            Оплатити карткою онлайн
          </Typography>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            px={15}
            py={6}
            bgcolor={'#242424'}
          >
            <Typography fontSize={32}>Apple Pay</Typography>
            <Image src={ApplePay} alt={'Apple Pay'} />
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bgcolor={'#242424'}
            px={15}
            py={20}
            sx={{
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Typography fontSize={32}>Оплатити криптою</Typography>
            <Image src={Card} alt={'Crypto'} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrderConfirmation;
