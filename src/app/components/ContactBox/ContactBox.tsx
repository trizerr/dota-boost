import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';
import Telegram from '../../assets/telegram.svg';

const ContactBox = () => {
  return (
    <Stack
      bgcolor={'#161616'}
      direction={'row'}
      py={32}
      px={42}
      borderRadius={'30px'}
    >
      <Stack spacing={30}>
        <Typography fontWeight={'bold'} fontSize={48}>
          Виникли проблеми з Оформленням Замовлення?
        </Typography>
        <Typography fontSize={24}>
          Якщо у вас виникли труднощі під час оформлення замовлення, не
          хвилюйтеся. Ми завжди готові допомогти! Напишіть нам у Телеграм, і ми
          оперативно вирішимо вашу проблему.
        </Typography>
      </Stack>
      <Stack>
        <Stack
          borderRadius={'15px'}
          direction={'row'}
          bgcolor={'#242424'}
          p={24}
          alignItems={'center'}
          ml={70}
        >
          <Typography fontSize={32} pr={32}>
            Напиши нам у телеграм
          </Typography>
          <Box
            bgcolor={'#161616'}
            borderRadius={'15px'}
            p={28}
            sx={{
              transition: 'border-radius 2s', // Smooth transition effect
              '&:hover': {
                cursor: 'pointer', // Change cursor on hover
                borderRadius: 100, // Change border radius on hover
              },
            }}
          >
            <Telegram width={72} height={74} />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactBox;
