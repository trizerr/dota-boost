'use client';
import { Stack } from '@mui/system';
import backgroundImage from '@/app/assets/orderBackground.png';
import { Button, Checkbox, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '../assets/backButton.png';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import OrderConfirmation from '@/app/order/components/OrderConfirmation/OrderConfirmation';
import theme from '@/app/styles/theme';
import Menu from '@/app/components/Menu/Menu';
import ContactBox from '@/app/components/ContactBox/ContactBox';
import Footer from '@/app/components/shared/Footer/Footer';

const OrderPage = () => {
  const searchParams = useSearchParams();
  const startMmr = searchParams.get('startMmr') as string;
  const endMmr = searchParams.get('endMmr') as string;
  const service = searchParams.get('service') as string;
  const server = searchParams.get('server') as string;
  const price = searchParams.get('price') as string;

  console.log('startMmr', startMmr);
  return (
    <Stack>
      <Menu />
      <Stack
        bgcolor={'#0D000E'}
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        overflow={'hidden'}
        alignItems={'center'}
        pb={130}
      >
        <Stack width={'64vw'} alignItems={'center'}>
          <Stack direction={'row'} alignItems={'center'} mt={120}>
            <Link href={'/'}>
              <Image src={BackButton} alt={'back button'} />
            </Link>
            <Stack ml={32}>
              <Typography fontSize={32} fontWeight={'bold'}>
                Послуги · Підвищити ММР · Підтвердження Замовлення
              </Typography>
              <Typography fontSize={64} fontWeight={'bold'}>
                Підтвердження Замовлення
              </Typography>
            </Stack>
          </Stack>
          <Stack alignItems={'center'} mt={'20vh'}>
            <OrderConfirmation
              startMmr={startMmr}
              endMmr={endMmr}
              service={service}
              server={server}
              price={price}
            />
            <Stack
              direction={'row'}
              mt={44}
              width={'90%'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Checkbox
                sx={{
                  flexShrink: 0,
                }}
              />
              <Typography fontSize={32} pl={16} textAlign={'center'}>
                Я ознайомився, та згоден з{' '}
                <Typography component="span" color={'#693DC8'} fontSize={32}>
                  Політикою Конфіденційності
                </Typography>
                , та{' '}
                <Typography component="span" color={'#693DC8'} fontSize={32}>
                  Правилами Користуання{' '}
                </Typography>{' '}
                нашого сервісу
              </Typography>
            </Stack>
            <Button
              sx={{
                backgroundColor: '#693DC8',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                width: '35vw',
                paddingY: 24,
                borderRadius: 30,
                mt: 44,
                mb: 94,
              }}
            >
              <Typography fontSize={'32px'} fontWeight={'bold'}>
                Оформити замовлення
              </Typography>
            </Button>
            <ContactBox />
          </Stack>
        </Stack>
      </Stack>
      <Footer gradientColors={['#655384', '#0D000E']} />
    </Stack>
  );
};

export default OrderPage;
