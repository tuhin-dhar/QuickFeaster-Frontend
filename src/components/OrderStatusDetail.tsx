import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="">
        <span>
          <b>Order Id: </b>
          {order._id.toUpperCase()}{" "}
        </span>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold">Delivering To:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold">Your Order </span>
        <ul>
          {order.cartItems.map((cartItem) => (
            <li>
              {cartItem.name} x {cartItem.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold">Total</span>
        <span>&#8377;{(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
