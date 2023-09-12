import * as React from 'react';
import { Button, createTheme } from '@mui/material';

import { ThemeProvider } from '@mui/material';

const Btn = ({text, color}) => {
  
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#FF5733',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#E0C2FF',
        light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#47008F',
      },
    },
  })

  return (
    <ThemeProvider theme={customTheme}>
    <Button variant='contained' color={color}>{text}</Button>
    </ThemeProvider>

  )
}

export {Btn}