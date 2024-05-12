export const filters = [
  {
    "name": "Open status",
    "isMultipleInput": { "value": "false", "noOfInputs": null },
    "field": "status",
    "operator": "=",
    "value": "Open",
    "logicalOperator": null
  },
  {
    "name": "Blue & Open",
    "isMultipleInput": { "value": "false", "noOfInputs": null },
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
    "name": "Green | Open",
    "isMultipleInput": { "value": "false", "noOfInputs": null },
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
  // {
  //   "name": "Blue orders",
  //   "isMultipleInput": "false",
  //   "field": "color",
  //   "operator": "=",
  //   "value": "Blue",
  //   "logicalOperator": null
  // },
  {
    "name": "Type",
    "isMultipleInput": { "value": "false", "noOfInputs": null },
    "field": "type",
    "operator": "AskUser",
    "options": ['Repair',
      'Maintenance',
      'Installation'],
    "logicalOperator": null
  },
  {
    "name": "Multiple OR filter",
    "isMultipleInput": { "value": "true", "noOfInputs": 2 },
    "field": "status",
    "operator": "AskUser",
    "options": ['In progress',
      'Open',
      'New',
      'Closed'],
    "logicalOperator": "OR",
    "nextFilter": {
      "field": "type",
      "operator": "AskUser",
      "options": ['Repair',
        'Maintenance',
        'Installation']
    }
  },
];