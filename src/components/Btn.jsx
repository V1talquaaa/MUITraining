import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';


const theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});

const Btn = () => {
    return(
        <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <ThemeProvider theme={theme}>
        <Button variant='contained' startIcon={<DeleteIcon />} color='ochre' onClick={() => console.log('click')}>Button</Button>
        </ThemeProvider>
      </div>
    )
}

export { Btn }