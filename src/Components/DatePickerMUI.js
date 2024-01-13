import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles'; // Import styled utility

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
    '& .MuiIconButton-root': {
      color: 'black', 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&.Mui-error fieldset': {
        borderColor: 'black', 
      },
      '&:hover fieldset': {
        borderColor: 'blue', 
      },
    },
  }));
  
  export default function CustomizedDatePicker({ onDateChange }) {
    
    const [value] = React.useState(null);
 
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'DatePicker',
                    'DateTimePicker',
                    'DateRangePicker',
                ]}
            >
                <DemoItem>
                    <StyledDatePicker value={value} onChange={(newValue) => onDateChange(newValue.$d)} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
