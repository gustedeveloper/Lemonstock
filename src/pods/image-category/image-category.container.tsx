import { FC, useContext, useEffect } from "react";
import { PhotoVM } from "../../core/model";
import { ImageCategoryComponent } from "./image-category.component";
import { PicturesContext } from "../../core/context/pictures-context";

interface Props {
  getPictures: () => Promise<PhotoVM[]>;
}

export const ImageCategoryContainer: FC<Props> = (props) => {
  const { getPictures } = props;

  const {
    pictures,
    setPictures,
    selectedPictures,
    setSelectedPictures,
    cartPictures,
    setCartPictures,
  } = useContext(PicturesContext);

  const handleCheckBox = (id: string) => {
    const selection = pictures.find((picture) => picture.id === id);

    if (selection) {
      selection.selected = !selection.selected;
      const updatedPictures = pictures.map((picture) =>
        picture.id === selection.id
          ? { ...picture, selected: selection.selected }
          : picture
      );
      setPictures(updatedPictures);
      updateCart(selection, id);
    }
  };

  const updateCart = (selection: PhotoVM, id: string) => {
    const updatedCart = cartPictures.filter((pic) => pic.id !== id);
    const updatedSelected = selectedPictures.filter((pid) => pid !== id);

    if (selection.selected) {
      setSelectedPictures([...selectedPictures, id]);
      setCartPictures([...updatedCart, selection]);
    } else {
      setSelectedPictures(updatedSelected);
      setCartPictures(updatedCart);
    }
  };

  useEffect(() => {
    getPictures().then(setPictures);
  }, [selectedPictures]);

  return (
    <ImageCategoryComponent
      pictures={pictures}
      handleCheckBox={handleCheckBox}
    />
  );
};
