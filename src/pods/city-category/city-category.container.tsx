import { FC } from "react";
import { getPictures } from "./city-category.api";
import { mapPictureCollectionFromApiToVm } from "./city.vm";
import { ImageCategoryContainer } from "../image-category";

export const CityCategoryContainer: FC = () => {
  return (
    <ImageCategoryContainer
      getPictures={getPictures}
      mapPictureCollectionFromApiToVm={mapPictureCollectionFromApiToVm}
    />
  );
};
