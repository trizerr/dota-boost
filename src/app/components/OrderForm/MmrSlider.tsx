'use client';

import { Box, Stack } from '@mui/system';
import { Slider, Typography } from '@mui/material';

const MmrSlider = ({
  sliderValue,
  setSliderValue,
}: {
  sliderValue: number[];
  setSliderValue: (value: number[]) => void;
}) => {
  return (
    <Stack
      sx={(theme) => ({
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: '13px',
        px: '50px',
      })}
    >
      <Box mx={'8px'}>
        <Slider
          getAriaLabel={() => 'mmr range'}
          value={sliderValue}
          onChange={(e, value) => {
            if (Array.isArray(value)) setSliderValue([value[0], value[1]]);
          }}
          min={0}
          max={8000}
          valueLabelDisplay="off"
          // getAriaValueText={'test'}
        />
      </Box>

      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography fontSize={'32px'} fontWeight={'bold'}>
          {sliderValue[0]}
        </Typography>
        <Typography fontSize={'32px'} fontWeight={'bold'}>
          {sliderValue[1]}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MmrSlider;
