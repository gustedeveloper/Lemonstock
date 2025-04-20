import { FC } from "react";
import { PictureInfo } from "../../core/model";
import React from "react";
import { CartList } from "./components";

interface Props {
  cartPictures: PictureInfo[];
  deleteFromCart: (id: string) => void;
  removeAll: () => void;
  totalCartBalance: number;
}

export const CartComponent: FC<Props> = React.memo((props) => {
  const { cartPictures, deleteFromCart } = props;

  return (
    <CartList cartPictures={cartPictures} deleteFromCart={deleteFromCart} />
  );
});
