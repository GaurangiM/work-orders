import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Contact type">
            <option value={1}>Brons</option>
            <option value={2}>Zilver</option>
          </optgroup>
          <optgroup label="Klant type">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
          <optgroup label="Uit te voeren voor">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
