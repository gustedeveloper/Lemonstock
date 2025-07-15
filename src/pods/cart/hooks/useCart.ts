import { useContext, useEffect, useState } from "react";
import { PicturesContext } from "../../../core/context/pictures-context";
import { PhotoVM } from "../../../core/model";

export const useCart = () => {
  const {
    pictures,
    selectedPictures,
    setSelectedPictures,
    totalCartBalance,
    setTotalCartBalance,
    removeAll,
  } = useContext(PicturesContext);
  const [cartPictures, setCartPictures] = useState<PhotoVM[]>([]);

  useEffect(() => {
    const filteredPictures = pictures.filter((picture) =>
      selectedPictures.includes(picture.id)
    );
    setCartPictures(filteredPictures);

    getTotalCartBalance();
  }, [selectedPictures, pictures]);

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
