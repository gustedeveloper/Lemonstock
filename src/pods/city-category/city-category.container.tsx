import { FC, useContext } from "react";
import { ImageCategoryContainer } from "../image-category";
import { PicturesContext } from "../../core/context/pictures-context";
import { getPicturesFromPexels } from "../../core/api/pexels.api"; // ajusta path

export const CityCategoryContainer: FC = () => {
  const { selectedPictures } = useContext(PicturesContext);

  return (
    <ImageCategoryContainer
      getPictures={() => getPicturesFromPexels("city", selectedPictures)}
    />
  );
};
