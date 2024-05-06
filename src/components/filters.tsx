import { Button } from "@mui/material";
import SingleSelectCheckmarks from "./select-checkbox";
import GroupedSelect from "./multiple-parameters-select";
import React from "react";

const Filters = () => {
  return (
    <div>
      <Button variant="outlined">Open Workbonnen</Button>
      <Button variant="outlined">Less than 15 km</Button>
      <SingleSelectCheckmarks />
      <GroupedSelect/>
    </div>
  );
};

export default Filters;