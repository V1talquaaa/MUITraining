import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import { Btn } from './Btn';
import { Calendar } from './Calendar';
// import { CustomDatePicker } from './CustomDatePicker';


export const App = () => {
  return (
    <>
<LocalizationProvider dateAdapter={AdapterDayjs}>
    {/* <Btn /> */}
    <Calendar />
    {/* <CustomDatePicker /> */}

</LocalizationProvider>
    </>
  );
};
