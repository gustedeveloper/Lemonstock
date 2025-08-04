import { FC } from "react";
import { CategorySectionComponent } from "./category-section.component";
import { PhotoVM } from "../../../../../core/model";

interface Props {
  categoryTitle: string;
  images: PhotoVM[];
}

export const CategorySectionContainer: FC<Props> = (props) => {
  const { categoryTitle, images } = props;
  return (
    <CategorySectionComponent categoryTitle={categoryTitle} images={images} />
  );
};
