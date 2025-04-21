import { FC } from "react";
import { CartComponent } from "./cart.component";
import { useCart } from "./hooks/useCart";

export const CartContainer: FC = () => {
  const { cartPictures, deleteFromCart } = useCart();

  return (
    <CartComponent
      cartPictures={cartPictures}
      deleteFromCart={deleteFromCart}
    />
  );
};
