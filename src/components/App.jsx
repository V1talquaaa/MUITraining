import * as React from 'react';
import { Sidebar } from './Sidebar/Sidebar';
import { Feed } from './Feed/Feed';
import { Rightbar } from './Rightbar/Rightbar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { Navbar } from './Navbar/Navbar';
import { Add } from './Add/Add';
import { useState } from 'react';

export const App = () => {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-around'>
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>

  );
};
