import { FC } from "react";
import { PhotoVM } from "../../core/model";
import React from "react";
import { CartList } from "./components";

interface Props {
  cartPictures: PhotoVM[];
  deleteFromCart: (id: string) => void;
}

export const CartComponent: FC<Props> = React.memo((props) => {
  const { cartPictures, deleteFromCart } = props;

  return (
    <CartList cartPictures={cartPictures} deleteFromCart={deleteFromCart} />
  );
});
