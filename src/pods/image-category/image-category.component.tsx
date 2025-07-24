import { FC } from "react";
import { PictureGallery } from "./components";
import { PhotoVM } from "../../core/model";

interface Props {
  pictures: PhotoVM[];
  handleCheckBox: (id: string) => void;
}

export const ImageCategoryComponent: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;
  return <PictureGallery pictures={pictures} handleCheckBox={handleCheckBox} />;
};
