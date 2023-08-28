import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import * as React from 'react';
import { useState } from 'react';
import css from './Calendar.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField } from '@mui/material';



const Calendar = () => {
  const date = new Date();

  const theme = createTheme({
    palette: {
      primary: {
        light: '#cbe2bf',
        main: '#BEDBB0',
        dark: '#85997b',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
          }
        }
      },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
          color: "#fff"
        }
      }
    },
    MuiDayPicker: {
      
    }
    }
  });

  const [value, setValue] = useState(dayjs(date));

  return (
    <div 
    style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
    <ThemeProvider theme={theme}>
        <DatePicker
          selected className={css.MenuItem}
          components={{
            OpenPickerIcon: ExpandMoreIcon  
        }}
          value={value}
          label="Deadline"
          views={['month', 'day']}
          disablePast
          
          onChange={newValue => setValue(newValue)}
          showDaysOutsideCurrentMonth
          renderInput={props => <TextField {...props}/>}
          sx={{
            svg: {fill: '#BEDBB0'},
            input: {color: '#BEDBB0'},
            label: {color: 'rgba(255, 255, 255, 0.50)'},
            calendarHeader: {backgroundColor: "#FF0000"},
            "& .MuiOutlinedInput-notchedOutline": { border: 0, "&:focus": {border: 0}},
            "& .css-1yllih9-MuiPaper-root-MuiPickersPopper-paper": {backgroundColor: "#FF0000"},
            "& .MuiPickersPopper-root": {backgroundColor: "#FF0000"}

          }}
        />
</ThemeProvider>
    </div>
  );
};

export { Calendar };


// import { DatePicker } from '@mui/x-date-pickers';
// import dayjs from 'dayjs';
// import * as React from 'react';
// import { useState } from 'react';
// import css from './Calendar.module.css'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { TextField } from '@mui/material';



// const Calendar = () => {
//   const date = new Date();

//   const theme = createTheme({
//     components: {
//       MuiPaper: {
//         styleOverrides: {
//           root: {
//             backgroundColor: "transparent"
//           }
//         }
//       },

//       MuiCalendarPicker: {
//         styleOverrides: {
//           root: {
//             backgroundColor: "yellow",
//             color: "red"
//           }
//         }
//       },
//       MuiDayPicker: {
//         styleOverrides: {
//           header: {
//             backgroundColor: "yelow",
//             color: "green"
//           }
//         }
//       },
//       MuiPickersDay: {
//         styleOverrides: {
//           root: {
//             backgroundColor: "green",
//             color: "yellow"
//           },
//           today: {
//             backgroundColor: "orange",
//             color: "red"
//           },
//         }
//       },
//     }
//   });

//   const [value, setValue] = useState(dayjs(date));

//   return (
//     <div 
//     style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}>
//     <ThemeProvider theme={theme}>
//         <DatePicker
//           selected className={css.MenuItem}
//           components={{
//             OpenPickerIcon: ExpandMoreIcon  
//         }}
//           value={value}
//           label="Deadline"
//           views={['month', 'day']}
//           disablePast
//           slotProps={{
//             actionBar: {
//               actions: ['today']
//             },
//             toolbar: {
//               hidden: false,
//               toolbarPlaceholder: "today",
//               toolbarFormat: "dd, mm"
//             }
//           }}
          
//           onChange={newValue => setValue(newValue)}
//           showDaysOutsideCurrentMonth
//           renderInput={props => <TextField {...props}/>}
//           sx={{
//             svg: {fill: '#BEDBB0'},
//             input: {color: '#BEDBB0'},
//             label: {color: 'rgba(255, 255, 255, 0.50)'},
//             calendarHeader: {backgroundColor: "#FF0000"},
//             "& .MuiOutlinedInput-notchedOutline": { border: 0, "&:focus": {border: 0}},
//             "& .css-1yllih9-MuiPaper-root-MuiPickersPopper-paper": {backgroundColor: "#FF0000"},
//             "& .MuiPickersPopper-root": {backgroundColor: "#FF0000"}

//           }}
//         />
// </ThemeProvider>
//     </div>
//   );
// };

// export { Calendar };


