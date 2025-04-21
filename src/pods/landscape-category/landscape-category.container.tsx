import { FC } from "react";
import { getPictures } from "./landscape-category.api";
import { mapPictureCollectionFromApiToVm } from "./landscape.vm";
import { ImageCategoryContainer } from "../image-category";

export const LandscapeCategoryContainer: FC = () => {
  return (
    <ImageCategoryContainer
      getPictures={getPictures}
      mapPictureCollectionFromApiToVm={mapPictureCollectionFromApiToVm}
    />
  );
};
