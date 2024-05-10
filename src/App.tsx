import { useEffect, useState } from 'react';
import Filters from './components/filters';
import WorkOrder from './components/work-order';
import { orders } from './data/orders';
import './App.css';
import { orderSchema, filterSchema, singleFilterSchema } from './model';

function App() {
  const [allOrders, setOrders] = useState<orderSchema[]>([]);
  const [filteredOrders, setFilterdOrders] = useState<orderSchema[]>([]);
  const [appliedFilter, setAppliedFilter] = useState<string>('');

  const singlefilterOrders = ({ field, operator, value }: singleFilterSchema, orderList: orderSchema[]) => {
    let matchedOrders: orderSchema[] = [];
    if (operator === '=') {
      console.log("Single filter w/o input");
      matchedOrders = orderList.filter((order: orderSchema) =>
        order[`${field}` as keyof orderSchema].toString().toLowerCase() === value?.toLowerCase());
      console.log(matchedOrders);
      setFilterdOrders(matchedOrders);
    } else {
      console.log("Single filter with input");
    }
    return matchedOrders;
  }

  const filterOrders = (filter: filterSchema) => {
    if (filter.logicalOperator === null) {
      singlefilterOrders(filter, allOrders);
      setAppliedFilter(filter.name);
    } else {
      let firstFilter, secondFilter, firstResult, secondResult;
      if (filter.nextFilter !== undefined) {
        firstFilter = {
          field: filter.field,
          operator: filter.operator,
          value: filter.value
        };
        secondFilter = {
          field: filter.nextFilter.field,
          operator: filter.nextFilter.operator,
          value: filter.nextFilter.value
        };
      }
      console.log(firstFilter, secondFilter);
      if (filter.logicalOperator === "AND" && firstFilter && secondFilter) {
        firstResult = singlefilterOrders(firstFilter, allOrders);
        singlefilterOrders(secondFilter, firstResult);
        setAppliedFilter(filter.name);
      } else if (filter.logicalOperator === "OR" && firstFilter && secondFilter) {
        firstResult = singlefilterOrders(firstFilter, allOrders);
        secondResult = singlefilterOrders(secondFilter, allOrders);
        console.log("First result:", firstResult);
        console.log("Second result:", secondResult);
        const combinedSet: Set<orderSchema> = new Set([...firstResult, ...secondResult]);
        const combinedArray: orderSchema[] = Array.from(combinedSet);
        console.log("Combined result:", combinedArray);
        setFilterdOrders(combinedArray);
        setAppliedFilter(filter.name);
      }
    }
  }

  const renderAllOrders = () => {
    setFilterdOrders(allOrders);
  }

  useEffect(() => {
    setOrders(orders);
    setFilterdOrders(orders);
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Work orders overview</h1>
      </header>
      <Filters 
      onFilter={filterOrders} 
      appliedFilter={appliedFilter}
      resetOrders={renderAllOrders}
      />
      
      
      <WorkOrder orders={filteredOrders} />
    </div>
  );
}

export default App;
