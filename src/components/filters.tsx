import { Button } from "@mui/material";
import SingleSelectCheckmarks from "./select-checkbox";
import GroupedSelect from "./multiple-parameters-select";
import { filters } from "../data/filters";
import { selectChildMethods, filterSchema, multiSelectMethods } from "../model";
import { TbRefresh } from "react-icons/tb";
import { useRef } from "react";

interface filterProps {
  onFilter: (value: filterSchema) => void;
  appliedFilter: string;
  resetOrders: () => void;
}

const Filters = (props: filterProps) => {
  const selectChildRef = useRef<selectChildMethods>(null);
  const multiSelectchildRef = useRef<multiSelectMethods>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const resetChild = () => {
    if (selectChildRef.current) {
      selectChildRef.current.resetSelect();
    }
    if (buttonRefs.current) {
      buttonRefs.current.forEach((buttonRef) => {
        if (buttonRef) {
          buttonRef.classList.remove('highlight');
        }
      });
    }
    if (multiSelectchildRef.current)
      multiSelectchildRef.current.resetValues();
  };

  return (
    <div className="filters-panel">
      {filters.map((filter, index) => {
        const highlightClass = props.appliedFilter && props.appliedFilter === filter.name ? 'highlight' : '';
        return (
          <div key={index} className="filter" >
            {filter.isMultipleInput.value === "true" && filter.nextFilter?.options && filter.options ?
              <GroupedSelect
                filter={filter}
                filters={[`${filter.field}`, `${filter.nextFilter.field}`]}
                optionSets={[[...filter.options], [...filter.nextFilter.options]]}
                onFilter={props.onFilter}
                forwardedRef={multiSelectchildRef}
              />
              :
              filter.operator === 'AskUser' && filter.options ? (
                <SingleSelectCheckmarks
                  optionsSet={filter.options}
                  filter={filter}
                  onFilter={props.onFilter}
                  forwardedRef={selectChildRef}
                />
              ) : (
                <Button
                  variant="outlined"
                  className={`filter-btn ${highlightClass}`}
                  onClick={() => props.onFilter(filter)}
                  ref={(el) => el && buttonRefs.current.push(el)}
                >
                  {filter.name}
                </Button>
              )}
          </div>
        )
      })}
      <Button
        variant="outlined"
        className="filter"
        onClick={() => {
          resetChild()
          props.resetOrders()
        }}
      >
        <TbRefresh />
      </Button>
    </div>
  );
};

export default Filters;