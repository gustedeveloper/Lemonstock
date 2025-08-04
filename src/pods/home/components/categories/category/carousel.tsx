import { Box, Card, CardMedia, IconButton } from "@mui/material";
import { FC, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PhotoVM } from "../../../../../core/model";

interface Props {
  images: PhotoVM[];
}

export const Carousel: FC<Props> = (props) => {
  const { images } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 290, behavior: "smooth" });
  };

  return (
    <>
      <Box position="relative" width="100%" overflow="hidden">
        <IconButton
          onClick={() => scroll(-4)}
          sx={{
            color: "secondary",
            backgroundColor: "primary.dark",
            opacity: 0.5,
            position: "absolute",
            top: "50%",
            left: "3%",
            zIndex: 2,
          }}
        >
          <ArrowBackIosIcon color="secondary" />
        </IconButton>
        <Box
          ref={ref}
          sx={{
            display: "flex",
            p: "20px",
            overflowX: "auto",
            scrollbarWidth: "none",
            gap: 2.24,
            scrollBehavior: "smooth",
          }}
        >
          {images.map((img) => (
            <Card
              key={img.id}
              onMouseEnter={() => setHoveredImage(img.id)}
              onMouseLeave={() => setHoveredImage(null)}
              sx={{
                width: { xs: 270, sm: 310, md: 360 },
                height: { xs: 200, sm: 240, md: 280 },
                flexShrink: 0,
                borderRadius: "5px",
                overflow: "visible",
                cursor: "pointer",
                position: "relative",
                transition: "transform 0.3s ease",
                transform: hoveredImage === img.id ? "scale(1.10)" : "scale(1)",
                transformOrigin: "center",
                zIndex: hoveredImage === img.id ? 1 : 0,
                backgroundColor: "transparent",
              }}
            >
              <CardMedia
                component="img"
                image={img.picUrl.large}
                loading="lazy"
                alt={img.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </Card>
          ))}
        </Box>

        <IconButton
          onClick={() => scroll(4)}
          sx={{
            backgroundColor: "primary.dark",
            opacity: 0.5,
            position: "absolute",
            top: "50%",
            right: "3%",
            zIndex: 2,
          }}
        >
          <ArrowForwardIosIcon color="secondary" />
        </IconButton>
      </Box>
    </>
  );
};
