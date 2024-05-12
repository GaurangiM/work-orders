import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { selectChildMethods, filterSchema } from '../model';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface selectCheckboxProps {
  optionsSet: string[];
  onFilter: (newFilter: filterSchema) => void;
  filter: filterSchema;
  forwardedRef: React.Ref<selectChildMethods>;
}

const SingleSelectCheckmarks = React.forwardRef<HTMLSelectElement, selectCheckboxProps>((props, ref) => {
  const [type, setType] = React.useState<string>('');

  const selectRef = React.useRef<HTMLSelectElement>(null);

  const resetSelect = () => {
    setType(''); // Reset the value to empty string
  };

  React.useImperativeHandle(props.forwardedRef, () => ({
    resetSelect
  }));

  const handleChange = (event: SelectChangeEvent<typeof type>) => {
    setType(event.target.value);
    let newFilter = {
      ...props.filter,
      "operator": "=",
      "value": event.target.value,
    };
    console.log(newFilter);
    props.onFilter(newFilter);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          {props.filter.name.toUpperCase()}
        </InputLabel>
        <Select
          ref={selectRef}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={type}
          onChange={(e) => handleChange(e)}
          input={<OutlinedInput label="Type" />}
          renderValue={(selected) => selected}
          MenuProps={MenuProps}
        >
          {props.optionsSet.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={type.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});

export default SingleSelectCheckmarks;
