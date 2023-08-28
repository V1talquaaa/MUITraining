import { Stack, TextField, TextFieldProps } from '@mui/material';
import { DatePicker, PickersActionBar } from '@mui/x-date-pickers';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { SxProps } from '@mui/material';  // пропс для зміни календаря

export const CustomDatePicker = () => {
  const [selectedDay, setSelectedDay] = useState();
  console.log(selectedDay);


  const popperSx = {
    "& .MuiDateCalendar-root": {
        backgroundColor: "#ABCDEF"
    }
  }

  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label="Deadline"
        showDaysOutsideCurrentMonth
        components={{
            OpenPickerIcon: ExpandMoreIcon  
        }} 

        // components додає іконку
    //     slotProps={{ 
    //         textField: { variant: 'outlined',} 
    // }}
    sx={{
      "& .MuiPaper-root": {backgroundColor: "#151515"},
        svg: {color: '#ABCDEF'},  // змінює колір іконки
    }}
        value={selectedDay}
        TextField={{sx: {"& svg": {fill: "#BBBBBB"}}}}
        onChange={(newValue) => setSelectedDay(newValue)}
        inputProps={{sx: {color: '#ABCDEF'}}}
      />
    </Stack>
  );
};
