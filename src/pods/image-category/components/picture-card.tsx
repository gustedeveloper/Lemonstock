import { Box, CardActionArea } from "@mui/material";
import { FC, useState } from "react";
import { PhotoVM } from "../../../core/model";
import { PictureImage } from "./picture-image";
import { PictureCardOverlay } from "./picture-card-overlay";

interface Props {
  picture: PhotoVM;
  handleCheckBox: (id: string) => void;
}

export const PictureCard: FC<Props> = (props) => {
  const { picture, handleCheckBox } = props;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Box
      key={picture.id}
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "opacity 0.2s ease-in-out",
        "&:hover": {
          opacity: 0.9,
        },
      }}
      onMouseEnter={() => setHoveredId(picture.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <CardActionArea
        sx={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <PictureImage picture={picture} />
        <PictureCardOverlay
          hoveredId={hoveredId}
          picture={picture}
          handleCheckBox={handleCheckBox}
        />
      </CardActionArea>
    </Box>
  );
};
