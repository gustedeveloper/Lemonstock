import { Box, useTheme, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { PhotoVM } from "../../../core/model";
import { PictureCard } from "./picture-card";
import { useColumnLayout } from "../hooks/useColumnLayout";

interface Props {
  pictures: PhotoVM[];
  handleCheckBox: (id: string) => void;
}

export const PictureGallery: FC<Props> = (props) => {
  const { pictures, handleCheckBox } = props;
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const columnCount = isTablet ? 2 : 3;
  const columns = useColumnLayout(pictures, columnCount);

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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
          gap: "10px",
          width: "100%",
        }}
      >
        {columns.map((column, columnIndex) => (
          <Box
            key={columnIndex}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {column.images.map((picture, imageIndex) => (
              <Box
                key={picture.id}
                sx={{
                  opacity: 0,
                  animation: "fadeInDown 0.6s ease-out forwards",
                  animationDelay: `${imageIndex * 0.1}s`,
                  "@keyframes fadeInDown": {
                    "0%": {
                      opacity: 0,
                      transform: "translateY(-20px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <PictureCard
                  picture={picture}
                  handleCheckBox={handleCheckBox}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
