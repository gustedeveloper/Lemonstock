import { useContext, useEffect, useState } from "react";
import { PicturesContext } from "../../../core/context/pictures-context";
import { PictureInfo } from "../../../core/model";
import { getAllPictures } from "../cart.api";

export const useCart = () => {
  const {
    selectedPictures,
    setSelectedPictures,
    totalCartBalance,
    setTotalCartBalance,
    removeAll,
  } = useContext(PicturesContext);
  const [cartPictures, setCartPictures] = useState<PictureInfo[]>([]);

  useEffect(() => {
    getAllPictures().then((apiPictures) => {
      setCartPictures(
        apiPictures.filter((picture) => selectedPictures.includes(picture.id))
      );
    });

    getTotalCartBalance();
  }, [selectedPictures, cartPictures]);

  const deleteFromCart = (id: string) => {
    const updateWithDeletedPicture = selectedPictures.filter(
      (picture) => picture !== id
    );

    setSelectedPictures(updateWithDeletedPicture);
  };

  const getTotalCartBalance = () => {
    const totalBalance = cartPictures.reduce(
      (total, picture) => total + picture.price,
      0
    );

    const decimals = totalBalance.toFixed(2);

    setTotalCartBalance(Number(decimals));
  };
  return {
    cartPictures,
    deleteFromCart,
    totalCartBalance,
    cartItemCount: cartPictures.length,
    removeAll,
  };
};
