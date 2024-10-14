import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

const BoostBlock = () => {
  return (
    <Stack bgcolor={'black'} pt={'53px'} alignItems={'center'} pb={'70px'}>
      <Stack width={'64vw'}>
        <Typography fontSize={'36px'} lineHeight={'36px'} fontWeight={'bold'}>
          Буст MMR у Dota 2
        </Typography>
        <Typography fontSize={'32px'} lineHeight={'32px'}>
          <br />
          MMR - це скорочення від Matchmaking Rating. Цей термін
          використовується в популярній грі Dota 2. Він являє собою практику,
          при якій відбувається збільшення рейтингу в грі за допомогою
          професіоналів. Наш сервіс знає, що таке швидкий і якісний буст ММР у
          Dota 2. Відповідно всі клієнти можуть розраховувати на сучасний
          сервіс, професійне обслуговування, підказки на основних етапах
          вивчення питання та замовлення. Можна підняти рейтинг у Dota 2 за
          розумною ціною, отримавши по-справжньому класний результат.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BoostBlock;
