import { useState, useContext } from 'react';
import { ColorModeContext } from './App';
import { ModSlider } from './ModSlider';

import {
  ButtonGroup,
  Button,
  Switch,
  Typography,
  IconButton,
  Box,
  Stack,
  Container,
} from '@mui/material';


import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


import { AlbumImage } from './AlbumImage';
import { Controls } from './Controls';

const PlayerCard = () => {
  const duration = 260; // seconds
  const [position, setPosition] = useState(0);
  const [isLiked, setLiked] = useState<boolean | null>(null);
  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  const colorMode = useContext(ColorModeContext);

  return (
    <Container maxWidth="sm">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '408px',
        margin: '0 auto'
      }}>
        <Switch onChange={colorMode.toggleColorMode}/>

        <AlbumImage src="https://via.ritzau.dk/data/images/00180/311cc18f-3372-4bbd-b50f-d4a253bfb755-w_960.jpg" />

        <Stack direction={'row'} sx={{
          alignItems: 'flex-start',
          margin: '0 auto 16px',
        }}>
            <IconButton
              color="secondary"
              component="label"
              onClick={() => {
                setLiked(isLiked === false ? null : false);
              }}
            >
              {isLiked === false ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />}
            </IconButton>
            <Stack>
              <Typography 
                variant="h6" 
                component="h5" 
                align="center"
                sx={{
                  fontSize: '20px',
                  lineHeight: '20px',
                  margin: '10px 0 8px',
                  color: 'text.primary',
                }}
              >
                Maniac
              </Typography>
              <Typography 
                component="span"
                sx={{
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: 'text.secondary',
                }}
                >
                  Michael Sambello
              </Typography>
            </Stack>
            <IconButton
              color="secondary"
              component="label"
              onClick={() => {
                setLiked(isLiked ? null : true);
              }}
            >
              {isLiked === true ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
            </IconButton>
        </Stack>
        <ModSlider
          aria-label="Custom marks"
          defaultValue={20}
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value: number | number[]) => {
            if (!Array.isArray(value)) {
              setPosition(value);
            }
          }}
          marks={[
            {
              value: 0,
              label: formatDuration(position),
            },
            {
              value: duration,
              label: formatDuration(duration),
            },
          ]}
          sx={{
            marginBottom: '70px',
          '& .MuiSlider-markLabel': {
            left: '96%',
          },
          '& .MuiSlider-markLabel.MuiSlider-markLabelActive': {
            left: '4%'
          }
          }}
        />
        <Controls />
      </Box>
    </Container>
  );
};

export default PlayerCard;
