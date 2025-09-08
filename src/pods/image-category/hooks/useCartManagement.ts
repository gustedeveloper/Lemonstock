import { useCallback, useContext } from "react";
import { PhotoVM } from "../../../core/model";
import { PicturesContext } from "../../../core/context/pictures-context";

interface UseCartManagementProps {
  items: PhotoVM[];
  setItems: React.Dispatch<React.SetStateAction<PhotoVM[]>>;
}

interface UseCartManagementReturn {
  handleCheckBox: (id: string) => void;
}

export const useCartManagement = ({
  items,
  setItems,
}: UseCartManagementProps): UseCartManagementReturn => {
  const {
    selectedPictures,
    setSelectedPictures,
    cartPictures,
    setCartPictures,
  } = useContext(PicturesContext);

  const handleCheckBox = useCallback(
    (id: string) => {
      const selection = items.find((picture) => picture.id === id);

      if (!selection) return;

      const toggled = { ...selection, selected: !selection.selected };

      // Update local items state
      setItems((prev) => prev.map((p) => (p.id === id ? toggled : p)));

      // Update global cart state
      const updatedCart = cartPictures.filter((pic) => pic.id !== id);
      const updatedSelected = selectedPictures.filter((pid) => pid !== id);

      if (toggled.selected) {
        setSelectedPictures([...updatedSelected, id]);
        setCartPictures([...updatedCart, toggled]);
      } else {
        setSelectedPictures(updatedSelected);
        setCartPictures(updatedCart);
      }
    },
    [
      items,
      setItems,
      cartPictures,
      selectedPictures,
      setCartPictures,
      setSelectedPictures,
    ]
  );

  return {
    handleCheckBox,
  };
};
