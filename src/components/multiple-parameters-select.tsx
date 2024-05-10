import * as React from 'react';
import { filterSchema, singleFilterSchema } from '../model';
import Multiselect from 'multiselect-react-dropdown';

interface GroupedSelectProps {
  filter: filterSchema;
  filters: singleFilterSchema[];
  optionSets: string[][];
  onFilter: (newFilter: filterSchema) => void;
}

const GroupedSelect = () => {

  // map the groupBy field with category column
  const fields: object = { groupBy: 'category', text: 'vegetable', value: 'id' };
    return (
      <Multiselect
        displayValue="key"
        groupBy="cat"
        onKeyPressFn={function noRefCheck() { }}
        onRemove={function noRefCheck() { }}
        onSearch={function noRefCheck() { }}
        onSelect={function noRefCheck() { }}
        options={[
          {
            cat: 'Group 1',
            key: 'Option 1'
          },
          {
            cat: 'Group 1',
            key: 'Option 2'
          },
          {
            cat: 'Group 1',
            key: 'Option 3'
          },
          {
            cat: 'Group 2',
            key: 'Option 4'
          },
          {
            cat: 'Group 2',
            key: 'Option 5'
          },
          {
            cat: 'Group 2',
            key: 'Option 6'
          },
          {
            cat: 'Group 2',
            key: 'Option 7'
          }
        ]}
        showCheckbox
        style={{
          multiselectContainer: {
            width: '25rem',
            marginTop: '0.5rem',
          },
          inputField: {
            'height': '2.6rem',
            width: '10rem',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }
        }}
        selectionLimit={2}
      />
    );
  }

export default GroupedSelect;