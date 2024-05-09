import { Button } from "@mui/material";
import SingleSelectCheckmarks from "./select-checkbox";
//import GroupedSelect from "./multiple-parameters-select";
import { filters } from "../data/filters";
import { filterSchema } from "../model";

interface filterProps {
  onFilter: (value: filterSchema) => void;
  appliedFilter: string;
}

const Filters = (props: filterProps) => {

  return (
    <div className="filters-panel">
      {filters.map((filter, index) => {
        const highlightClass = props.appliedFilter && props.appliedFilter === filter.name  ? 'highlight' : '';
        return (
          <div key={index} className="filter" >
            {filter.operator === 'AskUser' && filter.options ? (
              <SingleSelectCheckmarks optionsSet={filter.options} filter={filter} onFilter={props.onFilter}/>
            ) : (
              <Button variant="outlined" className={`filter-btn ${highlightClass}`}
                onClick={() => props.onFilter(filter)}
              >
                {filter.name}
              </Button>
            )}
          </div>
        )
      })}
    </div>
  );
};

export default Filters;