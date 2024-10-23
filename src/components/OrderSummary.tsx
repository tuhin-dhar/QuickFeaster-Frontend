import { CartItem } from "@/pages/SearchPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalinRupees = cartItems.reduce(
      (total, carttem) => total + carttem.price * carttem.quantity,
      0
    );

    const totalWithDelivery = (
      (totalinRupees + restaurant.deliveryPrice) /
      100
    ).toFixed(2);

    return totalWithDelivery;
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>&#8377;{getTotalCost()}</span>
        </CardTitle>
        <CardContent className="flex flex-col gap-5">
          {cartItems.map((item) => (
            <div className="flex justify-between">
              <span>
                <Badge variant="outline" className="mr-2">
                  {item.quantity}
                </Badge>
                {item.name}
              </span>
              <span className="flex items-center gap-1">
                <Trash
                  className="cursor-pointer"
                  color="red"
                  size={20}
                  onClick={() => removeFromCart(item)}
                />
                &#8377;{((item.price * item.quantity) / 100).toFixed(2)}
              </span>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between">
            <span>Delivery</span>
            <span> &#8377;{(restaurant.deliveryPrice / 100).toFixed(2)}</span>
          </div>
          <Separator />
        </CardContent>
      </CardHeader>
    </>
  );
};

export default OrderSummary;
