'use client';
import { Stack } from '@mui/system';
import backgroundImage from '@/app/assets/background_1.png';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Menu from '@/app/components/Menu/Menu';
import Footer from '@/app/components/shared/Footer/Footer';

const AboutPage: React.FC = () => {
  return (
    <Stack>
      <Menu />

      <Stack
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
        }}
        alignItems={'center'}
      >
        <Stack width={'32vw'} ml={'10vw'} my={50}>
          <Typography fontWeight={'bold'} fontSize={32}>
            Про нас
          </Typography>
          <Typography fontWeight={'bold'} fontSize={48}>
            Провідний Сервіс Українського Геймінгу для Вашого Успіху
          </Typography>
        </Stack>

        <Stack
          width={'40vw'}
          ml={'10vw'}
          py={80}
          pl={50}
          pr={30}
          borderRadius={'30px'}
          alignItems={'flex-end'}
          bgcolor={'rgba(22, 22, 22, 0.6)'}
          position={'relative'}
        >
          <Stack position={'absolute'} right={'50%'} bottom={'20%'}>
            <Image src={require('../assets/absolute_1.png')} alt={'logo'} />
          </Stack>

          <Typography
            textAlign={'right'}
            color={'#693DC8'}
            fontSize={36}
            fontWeight={'bold'}
          >
            Dota Boost
          </Typography>
          <Typography fontSize={48} textAlign={'right'} fontWeight={'bold'}>
            Незаперечний лідер українського геймінгу
          </Typography>
          <Typography textAlign={'right'} fontSize={32}>
            Наш сервіс є вірним супутником геймерів, які прагнуть досягнути
            вершин ігрового успіху. Вибираючи нас, ви обираєте команду
            професіоналів, готових підкорити будь-які виклики світу геймінгу.
          </Typography>
          <Image src={require('../assets/logo.png')} alt={'logo'} />
          <Typography textAlign={'right'} fontSize={32}>
            Ми пишаємося тим, що наш сервіс є виключно українським. Ми глибоко
            віримо в потенціал нашої країни та прагнемо підтримувати український
            геймінг на найвищому рівні. Кожен аспект нашого сервісу пронизаний
            духом української незламності.
          </Typography>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default AboutPage;
