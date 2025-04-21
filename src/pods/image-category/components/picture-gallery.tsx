import { Grid2 } from "@mui/material";
import { FC } from "react";
import { PictureInfoVm } from "../../../core/model";
import { PictureCard } from "./picture-card";

interface Props {
  pictures: PictureInfoVm[];
  handleCheckBox: (id: string) => void;
}

export const PictureGallery: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;

  return (
    <Grid2
      container
      sx={{
        justifyContent: "center",
        margin: {
          xs: "150px 0px",
          md: "0px",
        },
      }}
    >
      <Grid2
        size={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {pictures.map((picture) => (
          <PictureCard
            key={picture.id}
            picture={picture}
            handleCheckBox={handleCheckBox}
          />
        ))}
      </Grid2>
    </Grid2>
  );
};
