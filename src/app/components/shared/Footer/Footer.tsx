import { Stack } from '@mui/system';
import FooterItem from '@/app/components/shared/Footer/FooterItem';

const Footer = () => {
  return (
    <Stack
      sx={(theme) => ({
        background: 'linear-gradient(to top, #655384, black)',
      })}
      height={'380px'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Stack
        pt={'100px'}
        width={'64vw'}
        direction={'row'}
        alignItems={'center'}
        spacing={'20px'}
      >
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
          <FooterItem label={'Решетник Назар Бамбукович'} />
          <FooterItem label={'+38(050)7806445'} />
          <FooterItem label={'dzghbfgsd@gmail.com'} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
