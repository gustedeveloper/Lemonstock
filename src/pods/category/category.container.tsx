import { FC, useContext } from "react";
import { ImageCategoryContainer } from "../image-category";
import { PicturesContext } from "../../core/context/pictures-context";
import { getPicturesFromPexels } from "../../core/api/pexels.api"; // ajusta path
import { useParams } from "react-router-dom";

export const CategoryContainer: FC = () => {
  const { selectedPictures } = useContext(PicturesContext);
  const { categoryName } = useParams<{ categoryName: string }>();

  const apiQuery = categoryName?.replace(/-/g, " ") || "";

  return (
    <ImageCategoryContainer
      getPictures={(page, perPage) =>
        getPicturesFromPexels(apiQuery, selectedPictures, perPage, page)
      }
    />
  );
};
