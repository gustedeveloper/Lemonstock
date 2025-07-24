import { Card, CardActionArea, Grid2 } from "@mui/material";
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
    <Grid2 container key={picture.id}>
      <Grid2>
        <Card
          sx={{
            width: {
              xs: "200px",
              md: "300px",
            },
            height: {
              xs: "300px",
              md: "500px",
            },
            position: "relative",
          }}
          onMouseEnter={() => setHoveredId(picture.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <CardActionArea>
            <PictureImage picture={picture} />
            <PictureCardOverlay
              hoveredId={hoveredId}
              picture={picture}
              handleCheckBox={handleCheckBox}
            />
          </CardActionArea>
        </Card>
      </Grid2>
    </Grid2>
  );
};
