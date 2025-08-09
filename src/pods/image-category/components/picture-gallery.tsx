import { Box, ImageList, useTheme, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { PhotoVM } from "../../../core/model";
import { PictureCard } from "./picture-card";

interface Props {
  pictures: PhotoVM[];
  handleCheckBox: (id: string) => void;
}

export const PictureGallery: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const getColumns = () => {
    if (isTablet) return 2;
    return 3;
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        margin: {
          xs: "150px 0px",
          md: "0px",
        },
        overflow: "hidden",
      }}
    >
      <ImageList
        variant="masonry"
        cols={getColumns()}
        gap={10}
        sx={{
          width: "100%",
          margin: 0,
          overflow: "visible",
        }}
      >
        {pictures.map((picture) => (
          <PictureCard
            key={picture.id}
            picture={picture}
            handleCheckBox={handleCheckBox}
          />
        ))}
      </ImageList>
    </Box>
  );
};
