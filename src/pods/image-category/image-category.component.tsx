import { FC } from "react";
import { PictureGallery } from "./components";
import { PictureInfoVm } from "../../core/model";

interface Props {
  pictures: PictureInfoVm[];
  handleCheckBox: (id: string) => void;
}

export const ImageCategoryComponent: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;
  return <PictureGallery pictures={pictures} handleCheckBox={handleCheckBox} />;
};
