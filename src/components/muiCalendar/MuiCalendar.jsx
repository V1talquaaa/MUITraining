
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledEngineProvider } from '@mui/material';

const Calendar = () => {
  const date = new Date();

  const theme = createTheme({
    // ... (ваша тема)
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
        color: '#010101',
      }}
    >
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <DatePicker
            components={{
              OpenPickerIcon: ExpandMoreIcon,
            }}
            slotProps={{
              popper: {
                sx: {
                  '& .css-h43v6e-MuiButtonBase-root-MuiPickersDay-root.Mui-disabled:not(.Mui-selected)': {color: '#FF0000'},
                  '& .css-u2zioc-MuiButtonBase-root-MuiPickersDay-root.Mui-disabled:not(.Mui-selected)': {color: '#FF0000'},
                  '& .css-1yllih9-MuiPaper-root-MuiPickersPopper-paper': {backgroundColor: "#asdas"},
                },
              },
            }}
            value={value}
            label="Deadline"
            views={['month', 'day']}
            disablePast
            onChange={newValue => setValue(newValue)}
            showDaysOutsideCurrentMonth
            firstDayOfWeek={1} // Установите начало недели на понедельник (0 - воскресенье, 1 - понедельник, и так далее)
            sx={{
              svg: { fill: '#BEDBB0' },
              input: { color: '#BEDBB0' },
              label: { color: 'rgba(255, 255, 255, 0.50)'},
              '& .css-1xad8te-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {color: "#FF0000"}
            }}
          />
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
};

export { Calendar };