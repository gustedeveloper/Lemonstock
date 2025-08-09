import { FC } from "react";
import { PhotoVM } from "../../../core/model";

interface Props {
  picture: PhotoVM;
}

export const PictureImage: FC<Props> = (props) => {
  const { picture } = props;
  return (
    <img
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        objectFit: "cover",
        maxWidth: "100%",
      }}
      srcSet={`${picture.picUrl.large}?w=400&fit=crop&auto=format&dpr=2 2x`}
      src={`${picture.picUrl.large}?w=400&fit=crop&auto=format`}
      alt={picture.title}
      loading="lazy"
    />
  );
};
