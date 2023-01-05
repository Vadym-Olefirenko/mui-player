import { Slider } from "@mui/material";
import { styled } from '@mui/system';

export const ModSlider = styled(Slider)({
    '& .MuiSlider-markLabel[data-index="0"]': {
      transform: "translateX(0%)"
    },
    '& .MuiSlider-markLabel[data-index="1"]': {
      transform: "translateX(-100%)"
    }
  });