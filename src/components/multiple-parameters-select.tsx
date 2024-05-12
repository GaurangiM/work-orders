import * as React from 'react';
import { multiSelectMethods, filterSchema, Option } from '../model';
import Multiselect from 'multiselect-react-dropdown';

interface GroupedSelectProps {
  filter: filterSchema;
  filters: string[];
  optionSets: string[][];
  onFilter: (newFilter: filterSchema) => void;
  forwardedRef: React.Ref<multiSelectMethods>;
}

const GroupedSelect = React.forwardRef<Multiselect, GroupedSelectProps>((props, ref) => {
  const [dataset, setDataset] = React.useState<Option[]>([]);
  const multiselectRef = React.useRef<Multiselect>(null);

  const resetValues = () => {
    if (multiselectRef.current)
      multiselectRef.current.resetSelectedValues();
  }

  React.useImperativeHandle(props.forwardedRef, () => ({
    resetValues
  }));

  React.useEffect(() => {
    if (props.filters.length > 0 && props.optionSets.length > 0) {
      const combinedArray = props.filters.flatMap((filter, index) =>
        props.optionSets[index].map(option => ({
          cat: filter.toUpperCase(),
          key: option
        }))
      );
      setDataset(combinedArray);
    }

  }, [props.filters, props.optionSets]);
  return (
    <Multiselect
      displayValue="key"
      groupBy="cat"
      onKeyPressFn={function noRefCheck() { }}
      onSelect={
        function noRefCheck(selectedList, selectedItem) {
          let newFilter = selectedList.length === 2 ? {
            ...props.filter,
            "field": selectedList[0].cat.toLowerCase(),
            "operator": "=",
            "value": selectedList[0].key,
            "nextFilter": {
              "field": selectedList[1].cat.toLowerCase(),
              "operator": "=",
              "value": selectedList[1].key
            }
          } : null;
          if (newFilter !== null)
            props.onFilter(newFilter);
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
      ref={multiselectRef}
      selectionLimit={2}
      placeholder={props.filter.name}
    />
  );
})

export default GroupedSelect;