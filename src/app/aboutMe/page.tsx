'use client';
import { Stack } from '@mui/system';
import Menu from '@/app/components/Menu/Menu';
import Footer from '@/app/components/shared/Footer/Footer';
import Image from 'next/image';
import backgroundImage from '@/app/assets/meBackground.png';
import { Typography } from '@mui/material';

const AboutMe = () => {
  return (
    <Stack>
      <Menu />
      <Stack
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
        }}
        alignItems={'center'}
        justifyContent={'center'}
        height={'1080px'}
      >
        <Stack
          position={'relative'}
          width={'60vw'}
          borderRadius={'30px'}
          height={'600px'}
          bgcolor={'rgba(36, 36, 36, 0.85)'}
        >
          <Stack position={'absolute'} top={'-200px'}>
            <Image
              src={require('../assets/myPicture.png')}
              alt={'My picture'}
            />
          </Stack>
          <Stack width={'50%'} height={'400px'} alignSelf={'flex-end'}>
            <Typography
              textAlign={'right'}
              color={'white'}
              pt={48}
              pr={48}
              fontSize={40}
              fontWeight={'bold'}
            >
              Решетник Назар, студент групи ПП-21
            </Typography>
          </Stack>

          <Stack
            bgcolor={'rgba(22, 22, 22, 0.9)'}
            py={80}
            pl={30}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'30px'}
          >
            <Typography color={'white'} fontSize={32}>
              На розробку сайту у мене пішло більше 30 годин. Для іконок я
              використав SVG зображення, встановив відео з YouTube та додав
              динамічні елементи JavaScript. Сподіваюся на хорошу оцінку.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default AboutMe;
