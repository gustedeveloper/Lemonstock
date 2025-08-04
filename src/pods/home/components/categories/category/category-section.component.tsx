import { FC } from "react";
import { PhotoVM } from "../../../../../core/model";
import { Carousel } from "./carousel";
import { Typography } from "@mui/material";

interface Props {
  categoryTitle: string;
  images: PhotoVM[];
}

export const CategorySectionComponent: FC<Props> = (props) => {
  const { categoryTitle, images } = props;

  return (
    <>
      <Typography variant="h2" sx={{ p: "5px 20px", color: "primary.main" }}>
        {categoryTitle}
      </Typography>
      <Carousel images={images} />
    </>
  );
};
