export const filters =[
  {
    "name": "Open orders",
    "field": "status",
    "operator": "=",
    "value": "Open",
    "logicalOperator": null
  },
  {
    "name": "Blue & Open orders",
    "field": "status",
    "operator": "=",
    "value": "Open",
    "logicalOperator": "AND",
    "nextFilter": {
      "field": "color",
      "operator": "=",
      "value": "Blue"
    }
  },
  {
    "name": "Green | Open orders",
    "field": "status",
    "operator": "=",
    "value": "Open",
    "logicalOperator": "OR",
    "nextFilter": {
      "field": "color",
      "operator": "=",
      "value": "Green"
    }
  },
  {
    "name": "Blue orders",
    "field": "color",
    "operator": "=",
    "value": "Blue",
    "logicalOperator": null
  },
  {
    "name": "Type",
    "field": "type",
    "operator": "AskUser",
    "logicalOperator": null
  },
  // {
  //   "field": "startDate",
  //   "operator": "AskUser"
  // }
];