import { Stack } from '@mui/system';
import backgroundImage from '@/app/assets/becomeBooster.png';
import { Button, Typography } from '@mui/material';

const BecomeBooster = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
        }}
        alignItems={'center'}
        height={'1068px'}
      >
        <Stack width={'64vw'}>
          <Stack
            bgcolor={'rgba(22, 22, 22, 0.9)'}
            pt={'56px'}
            pb={'40px'}
            mt={'32px'}
            borderRadius={'30px'}
            alignItems={'center'}
          >
            <Typography
              fontSize={'70px'}
              textAlign={'center'}
              fontWeight={'bold'}
            >
              Ставай бустером уже зараз!
            </Typography>
            <Typography mt={17} textAlign={'center'} fontSize={'48px'}>
              Починай грати та отримувати <br /> за це гроші
            </Typography>
          </Stack>

          <Stack
            bgcolor={'rgba(22, 22, 22, 0.9)'}
            borderRadius={'30px'}
            width={'600px'}
            alignSelf={'flex-end'}
            textAlign={'center'}
            mt={'44px'}
          >
            <Stack
              height={'100px'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Typography fontSize={'32px'} lineHeight={'32px'}>
                досвідчена команда спеціалістів, яка завжди допоможе
              </Typography>
            </Stack>
            <Stack
              height={'100px'}
              alignItems={'center'}
              justifyContent={'center'}
              sx={{
                borderBottom: '2px solid #242424',
                borderTop: '2px solid #242424',
              }}
            >
              <Typography fontSize={'32px'} lineHeight={'32px'}>
                гідна оплата праці
              </Typography>
            </Stack>
            <Stack
              height={'100px'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Typography fontSize={'32px'} lineHeight={'32px'}>
                допомога з пошуком клієнтів
              </Typography>
            </Stack>
          </Stack>

          <Button
            variant="contained"
            sx={{
              mt: '36px',
              alignSelf: 'flex-end',
              padding: '44px 68px',
              backgroundColor: '#693DC8',
              color: 'white',
              fontSize: '32px',
              width: 'auto',
              borderRadius: '30px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#4D2B78',
              },
            }}
          >
            Подати заявку
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default BecomeBooster;
