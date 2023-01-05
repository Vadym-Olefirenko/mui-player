import { useState, useMemo, createContext } from 'react';
import getDesignTokens from '../styles/theme';
import PlayerCard from './PlayerCard';
import { Box } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = (): JSX.Element => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <a
            href="https://www.figma.com/file/i9nWRlDrDbqruPpyaXhy8W/player-card?node-id=2%3A5665"
            target="_blank"
            rel="noreferrer"
          >
            <h1>MUI II. Layout and theme</h1>
          </a>
          <PlayerCard />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;