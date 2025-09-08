import { FC } from "react";
import { ImageCategoryContainer } from "../image-category";
import { getPicturesFromPexels } from "../../core/api/pexels.api"; // ajusta path
import { useParams } from "react-router-dom";

export const CategoryContainer: FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const apiQuery = categoryName?.replace(/-/g, " ") || "";

  return (
    <ImageCategoryContainer
      getPictures={(page, perPage) =>
        getPicturesFromPexels(apiQuery, [], perPage, page)
      }
    />
  );
};
