import * as React from 'react';
import { useState } from 'react';

import { Slider, Popover, Stack, Box } from '@mui/material';

import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';

import { ModIconButton } from './ModIconButton';

export const Controls = () => {
  const [volume, setVolume] = useState(100);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showVolumeIcon = React.useCallback(() => {
    if (volume === 0) {
      return <VolumeOffOutlinedIcon />;
    } else if (volume > 50) {
      return <VolumeUpOutlinedIcon />;
    } else {
      return <VolumeDownOutlinedIcon />;
    }
  }, [volume]);

  return (
    <Box>
      <Stack direction="row" spacing={'25px'}>
        <ModIconButton color="secondary">
          <RepeatIcon />
        </ModIconButton>
        <ModIconButton color="secondary">
          <ShuffleIcon />
        </ModIconButton>
        <ModIconButton color="secondary">
          <SkipPreviousOutlinedIcon />
        </ModIconButton>
        <ModIconButton  color="secondary">
          <PlayArrowOutlinedIcon />
        </ModIconButton>
        <ModIconButton color="secondary">
          <SkipNextOutlinedIcon />
        </ModIconButton>
        <ModIconButton color="secondary">
          <QueueMusicOutlinedIcon />
        </ModIconButton>
        <ModIconButton color="secondary" onClick={handleClick}>
          {showVolumeIcon()}
        </ModIconButton>
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDownOutlinedIcon />
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={(event, value) => setVolume(+value)}
            />
            <VolumeUpOutlinedIcon />
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

