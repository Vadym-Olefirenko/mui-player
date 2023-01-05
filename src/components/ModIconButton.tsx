import { colors } from '../styles/variables';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';

export const ModIconButton = styled(IconButton)({
    '&:hover, &.Mui-focusVisible': {
        backgroundColor: colors.controlsBg,
        color: colors.controlsActionColor,
      },
  });