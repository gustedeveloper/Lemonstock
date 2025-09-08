import React from "react";
import { Box, useTheme, useMediaQuery, GlobalStyles } from "@mui/material";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import { FC } from "react";
import { PhotoVM } from "../../../core/model";
import { PictureCard } from "./picture-card";

interface Props {
  pictures: PhotoVM[];
  handleCheckBox: (id: string) => void;
}

export const PictureGallery: FC<Props> = ({ pictures, handleCheckBox }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const columnCount = isTablet ? 2 : 3;

  // `meta` field with the original PhotoVM to use in rendering
  const photos = pictures.map((p) => ({
    src: p.picUrl.large,
    width: p.width,
    height: p.height,
    alt: p.title || "",
    key: p.id,
    meta: p, //  custom attribute — accessible in render functions
  }));

  return (
    <>
      {/* Inject global keyframes for the fadeInDown animation */}
      <GlobalStyles
        styles={{
          "@keyframes fadeInDown": {
            "0%": { opacity: 0, transform: "translateY(-20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          margin: { xs: "150px 0px", md: "0px" },
        }}
      >
        <ColumnsPhotoAlbum
          photos={photos}
          columns={columnCount}
          spacing={10}
          // render.wrapper allows you to keep the wrapper that react-photo-album uses
          // and passes props (style/className) containing the calculated positioning
          render={{
            wrapper: (props, { photo }) => {
              const animationStyle: React.CSSProperties = {
                ...props.style,
                opacity: 0,
                animation: "fadeInDown 0.3s ease-out forwards",
                animationDelay: `0.1s`,
              };

              return (
                <div {...props} style={animationStyle}>
                  {/* use PictureCard with the original meta PhotoVM  */}
                  <PictureCard
                    picture={photo.meta}
                    handleCheckBox={handleCheckBox}
                  />
                </div>
              );
            },
          }}
          // componentsProps to control loading/decoding of <img>
          componentsProps={(containerWidth) => ({
            image: {
              loading: (containerWidth || 0) > 600 ? "eager" : "lazy",
              decoding: "async",
            },
          })}
        />
      </Box>
    </>
  );
};
