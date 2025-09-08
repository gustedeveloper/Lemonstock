import { FC } from "react";
import { Container } from "@mui/material";
import { PictureGallery, LoadMoreButton } from "./components";
import { PhotoVM } from "../../core/model";

interface Props {
  pictures: PhotoVM[];
  handleCheckBox: (id: string) => void;
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

export const ImageCategoryComponent: FC<Props> = ({
  pictures,
  handleCheckBox,
  hasMore,
  isLoading,
  onLoadMore,
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      <LoadMoreButton
        hasMore={hasMore}
        isLoading={isLoading}
        onLoadMore={onLoadMore}
      />
    </Container>
  );
};
