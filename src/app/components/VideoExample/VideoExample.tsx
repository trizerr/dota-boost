import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import ReactPlayer from 'react-player';

const VideoExample = () => {
  return (
    <Stack alignItems={'center'} overflow={'hidden'}>
      <Stack width={'64vw'} alignItems={'center'}>
        <Typography mb={'80px'} fontWeight={'bold'} fontSize={'36px'}>
          Відео з прикладом бусту клієнтського аккаунту на YouTube
        </Typography>

        <ReactPlayer
          width={'100%'}
          height={'685px'}
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
      </Stack>
    </Stack>
  );
};

export default VideoExample;
