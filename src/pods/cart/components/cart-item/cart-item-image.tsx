import { CardMedia } from "@mui/material";
import { FC } from "react";

interface Props {
  image: string;
  alt: string;
}

export const CartItemImage: FC<Props> = (props) => {
  const { image, alt } = props;
  return (
    <>
      <CardMedia component="img" image={image} alt={alt}></CardMedia>
    </>
  );
};
