import { CardMedia } from "@mui/material";
import { FC } from "react";
import { PhotoVM } from "../../../core/model";

interface Props {
  picture: PhotoVM;
}

export const PictureImage: FC<Props> = (props) => {
  const { picture } = props;
  return (
    <CardMedia
      component="img"
      image={picture.picUrl}
      alt={picture.title}
      sx={{
        objectFit: "cover",
        height: {
          xs: "300px",
          md: "500px",
        },
      }}
    ></CardMedia>
  );
};
