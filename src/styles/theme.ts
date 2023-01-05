import { colors } from "./variables";
import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { ColorLensRounded } from "@mui/icons-material";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
                main: colors.light.primary
            },
            secondary: {
                main: colors.light.secondary
            },
            background: {
                default: colors.light.background,
              },
            text: {
              primary: colors.light.text.primary,
              secondary: colors.light.text.secondary,
            },
          }
        : {
            // palette values for dark mode
            primary: {
                main: colors.dark.primary
            },
            secondary: {
                main: colors.dark.secondary
            },
            background: {
              default: colors.dark.background,
            },
            text: {
              primary: colors.dark.text.primary,
              secondary: colors.dark.text.secondary,
            },
          }),
    },
    typography: {
        fontFamily: 'Poppins',
      },
  });
  
  

export default getDesignTokens;