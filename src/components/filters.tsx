import { Button } from "@mui/material";
import SingleSelectCheckmarks from "./select-checkbox";
import GroupedSelect from "./multiple-parameters-select";
import { filters } from "../data/filters";
import { ChildMethods, filterSchema } from "../model";
import { TbRefresh } from "react-icons/tb";
import { useRef } from "react";

interface filterProps {
  onFilter: (value: filterSchema) => void;
  appliedFilter: string;
  resetOrders: () => void;
}

const Filters = (props: filterProps) => {
  const childRef = useRef<ChildMethods>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const resetChild = () => {
    if (childRef.current) {
      childRef.current.resetSelect(); // Reset input value
    }
    if (buttonRef.current) {
      buttonRef.current.classList.remove('highlight'); // Remove the class from the element
    }
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
              />
              :
              filter.operator === 'AskUser' && filter.options ? (
                <SingleSelectCheckmarks
                  optionsSet={filter.options}
                  filter={filter}
                  onFilter={props.onFilter} 
                  forwardedRef={childRef}
                  />
              ) : (
                <Button
                  variant="outlined"
                  className={`filter-btn ${highlightClass}`}
                  onClick={() => props.onFilter(filter)}
                  ref={buttonRef}
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
        onClick={()=>{
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