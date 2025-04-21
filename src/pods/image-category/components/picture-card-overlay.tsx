import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { PictureInfoVm } from "../../../core/model";
import { BuyCheckbox } from "./buy-checkbox";

interface Props {
  hoveredId: string | null;
  picture: PictureInfoVm;
  handleCheckBox: (id: string) => void;
}

export const PictureCardOverlay: FC<Props> = (props) => {
  const { hoveredId, picture, handleCheckBox } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0))",
        color: "white",
        padding: "10px 20px",
        opacity: hoveredId === picture.id ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        textAlign: "flex-start",
      }}
    >
      <BuyCheckbox
        picture={picture}
        handleCheckBox={() => handleCheckBox(picture.id)}
      />
      <Typography>{picture.title}</Typography>
    </Box>
  );
};
