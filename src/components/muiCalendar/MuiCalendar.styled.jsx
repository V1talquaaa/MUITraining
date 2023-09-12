import { DatePicker } from '@mui/x-date-pickers';
import styled from '@emotion/styled';

const CalendarStyled = styled(DatePicker)`
.MuiDatePicker-root: {
  backgroundColor: '#FF0000',
}
`

const CalendarStyles = {
  '.MuiOutlinedInput-root': {
    border: 'none',
    borderRadius: '1px',
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '.MuiPickersDay-root': {
    backgroundColor: "#FF0000",
  },
  '.css-1jsy6pn-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)': {
    backgroundColor: "#FF0000",
  }
}

export {CalendarStyled, CalendarStyles}

