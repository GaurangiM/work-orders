export interface orderSchema {
  id: string;
  name: string;
  status: string;
  type: string;
  startDate: string,
  endDate: string;
  color: string;
  description: string;
}

export interface singleFilterSchema {
  field: string;
  operator: string;
  value?: string;
  options?: string [];
}

export interface colorSchema {
  name: string;
  value: string;
}

export interface multipleInputSchema {
  value: string;
  noOfInputs: number | null;
}

export interface filterSchema {
  name: string;
  isMultipleInput: multipleInputSchema;
  field: string;
  operator: string;
  value?: string;
  options?: string [];
  logicalOperator: string | null;
  nextFilter?: singleFilterSchema ;
}

export interface selectChildMethods {
  resetSelect: () => void;
  
}

export interface multiSelectMethods {
  resetValues: () => void;
}

export interface Option {
  cat: string;
  key: string;
}