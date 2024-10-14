import { Stack } from '@mui/system';
import Medal from '@/app/assets/medal.png';
import Image from 'next/image';
import { Typography } from '@mui/material';

const JobExplain = () => {
  return (
    <Stack
      borderRadius={'30px'}
      py={36}
      px={62}
      bgcolor={'rgba(22, 22, 22, 0.9)'}
    >
      <Stack
        bgcolor={'rgba(36, 36, 36, 0.9)'}
        borderRadius={'30px'}
        direction={'row'}
        px={22}
      >
        <Image src={Medal} alt={'medal'} />
        <Stack spacing={18} ml={90} justifyContent={'center'}>
          <Typography fontSize={40}>Мінімальний рейтинг - 5000 MMR</Typography>
          <Typography fontSize={40}>Робочого часу в день - 5 год</Typography>
        </Stack>
      </Stack>
      <Typography fontSize={48} fontWeight={'bold'} pt={40}>
        Сервіс{' '}
      </Typography>
      <Typography fontSize={32} pt={22}>
        Ми пропонуємо унікальний сервіс як для клієнтів так і для бустерів. Наш
        сервіс використовує пряму апі інтеграцію з Dota 2, що дає змогу
        розробити унікальний продукт. Відстежуй статистику своєї роботи, матчі
        що ти граєш та ще багато іншого у воркспейсі бустера.{' '}
      </Typography>
      <Typography fontSize={48} fontWeight={'bold'} pt={40}>
        Підтримка
      </Typography>
      <Typography fontSize={32} pt={22}>
        Ми стежимо за вашими досягненнями та надаємо вам підтримку на кожному
        етапі. Ми розробили комунікаційну система, яка дозволяє вам легко
        зв&#39;язатися як з нами, так і з клієнтом для отримання додаткової
        інформації, вирішення питань чи отримання підтримки.
      </Typography>
      <Typography fontSize={48} fontWeight={'bold'} pt={40}>
        Винагороди
      </Typography>
      <Typography fontSize={32} pt={22}>
        Конкурентні винагороди: Ми пропонуємо вам справедливу та конкурентну
        систему винагород, яка враховує ваші зусилля та вміння. Ви отримуєте
        винагороду за кожний отриманий ММР на аккаунті, це дозволить вам
        отримувати стабільний дохід.
      </Typography>
    </Stack>
  );
};

export default JobExplain;
