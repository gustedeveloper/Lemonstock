import { useContext, useEffect } from "react";
import { PicturesContext } from "../../../core/context/pictures-context";
import { PhotoVM } from "../../../core/model";

export const useCart = () => {
  const {
    selectedPictures,
    setSelectedPictures,
    cartPictures,
    setCartPictures,
    totalCartBalance,
    setTotalCartBalance,
    removeAll,
  } = useContext(PicturesContext);

  useEffect(() => {
    const updatedCart = cartPictures.filter((picture) =>
      selectedPictures.includes(picture.id)
    );
    setCartPictures(updatedCart);

    getTotalCartBalance(updatedCart);
  }, [selectedPictures]);

  const deleteFromCart = (id: string) => {
    setSelectedPictures(selectedPictures.filter((picId) => picId !== id));
    setCartPictures(cartPictures.filter((pic) => pic.id !== id));
  };

  const getTotalCartBalance = (cart: PhotoVM[]) => {
    const total = cart.reduce((sum, picture) => sum + picture.price, 0);
    setTotalCartBalance(Number(total.toFixed(2)));
  };

  return {
    cartPictures,
    deleteFromCart,
    totalCartBalance,
    cartItemCount: cartPictures.length,
    removeAll,
  };
};
