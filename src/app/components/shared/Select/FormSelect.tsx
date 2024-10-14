import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import SelectIcon from '../../../assets/Select.svg';

export interface FormSelectProps {
  items: {
    value: number;
    label: string;
  }[];
  onChange: (event: SelectChangeEvent) => void;
  value: string | number;
  label: string;
  uniqueKey: string;
}

const FormSelect = ({
  items,
  value,
  label,
  onChange,
  uniqueKey,
}: FormSelectProps) => {
  return (
    <FormControl
      fullWidth
      sx={{
        // flexShrink: 1,
        minWidth: 200,
        '.MuiInputBase-input': {
          padding: '8px 20px',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            fontSize: '24px',
          },
          '&:hover fieldset': {
            fontSize: '24px',
          },
          '&.Mui-focused fieldset': {
            fontSize: '24px',
          },
        },
        // '& .MuiInputLabel-root': {
        //   color: 'gray',
        //   fontSize: '1.2rem',
        // },
        // '& .MuiInputLabel-root.Mui-focused': {
        //   color: 'blue',
        //   fontSize: '1rem',
        // },
      }}
    >
      <InputLabel
        sx={{
          color: 'white',
          fontSize: '24px',
          top: '-4px',
          '&.Mui-focused': {
            fontSize: '24px', // Label size when focused
          },
        }}
        id={`demo-simple-select-label-${uniqueKey}`}
      >
        {label}
      </InputLabel>
      <Select
        IconComponent={SelectIcon}
        labelId={`demo-simple-select-label-${uniqueKey}`}
        id={`demo-simple-select-${uniqueKey}`}
        value={value || undefined}
        label={label}
        onChange={onChange}
        MenuProps={{
          disableScrollLock: true,
        }}
        sx={(theme) => ({
          maxWidth: '405px',
          backgroundColor: theme.palette.secondary.dark,
          // borderWidth: 0,
          borderRadius: '13px',
          padding: 0,
          color: theme.palette.primary.main,
          fontSize: '36px',
          // lineHeight: '36px',
          '.MuiSelect-icon': {
            top: 'calc(50% - 11px)',
            right: '16px',
          },
          '& .MuiSelect-select': {
            paddingRight: '40px',
          },
          '& .MuiInputBase-input': {
            paddingRight: '40px',
          },
          '& .MuiOutlinedInput-input': {
            paddingRight: '60px !important',
          },
        })}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
