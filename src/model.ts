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

export interface filterSchema {
  name: string;
  field: string;
  operator: string;
  value?: string;
  options?: string [];
  logicalOperator: string | null;
  nextFilter?: singleFilterSchema ;
}