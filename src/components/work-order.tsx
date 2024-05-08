import { orderSchema } from "../model";

interface workOrderListProps {
  orders: orderSchema[];
}

const WorkOrder = ({ orders }: workOrderListProps) => {
  return (
    <div className="work-order">
      {orders.map((order) => {
        return <div className="card order-card" key={order.id}>
          <div className="card-header" style= {{backgroundColor: order.color.value}}>
            <p>{order.name}</p>
            <p>Type: {order.type}</p>
            <p>Status: {order.status}</p>
          </div>
          <div className="card-body">
            <p>Start Date: {order.startDate}</p>
            <p>End Date: {order.endDate}</p>
            <p>{order.description}</p>
          </div>
        </div>
      })}
    </div>
  );
}

export default WorkOrder;