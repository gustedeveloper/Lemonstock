import { FC } from "react";
import { Container } from "@mui/material";
import { PictureGallery } from "./components";
import { PhotoVM } from "../../core/model";

interface Props {
  pictures: PhotoVM[];
  handleCheckBox: (id: string) => void;
}

export const ImageCategoryComponent: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        padding: {
          xs: "0 16px",
          sm: "0 24px",
          md: "0 32px",
        },
      }}
    >
      <PictureGallery pictures={pictures} handleCheckBox={handleCheckBox} />
    </Container>
  );
};
