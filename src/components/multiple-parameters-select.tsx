import * as React from 'react';
import { filterSchema, singleFilterSchema } from '../model';
import Multiselect from 'multiselect-react-dropdown';

interface GroupedSelectProps {
  filter: filterSchema;
  filters: string[];
  optionSets: string[][];
  onFilter: (newFilter: filterSchema) => void;
}

interface Option {
  cat: string;
  key: string;
}

const GroupedSelect = (props: GroupedSelectProps) => {
  const [dataset, setDataset] = React.useState<Option[]>([]);
  React.useEffect(() => {
    if(props.filters.length > 0 && props.optionSets.length > 0) {
      const combinedArray = props.filters.flatMap((filter, index) =>
        props.optionSets[index].map(option => ({ 
          cat: filter.toUpperCase(),
          key: option 
        }))
      );
      console.log(combinedArray);
      setDataset(combinedArray);
    }
    
  }, [props.filters, props.optionSets]);
    return (
      <Multiselect
        displayValue="key"
        groupBy="cat"
        onKeyPressFn={function noRefCheck() { }}
        // onRemove={function noRefCheck() { }}
        // onSearch={function noRefCheck() { }}
        onSelect={function noRefCheck(selectedList, selectedItem) {
          console.log(selectedList, selectedItem);

         }}
        options={dataset}
        showCheckbox
        closeOnSelect
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