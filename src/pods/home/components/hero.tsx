import { Box, Card, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

const hero = {
  imgSrc: "https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg",
  title: (
    <>
      Buy stunning,
      <br />
      royalty-free photos ready to use
    </>
  ),
  description: "A collection for creators and dreamers",
};

export const Hero: FC = () => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          transition: "opacity 0.7s",
          "&:hover": {
            opacity: 0.9,
          },
          height: 600,
        }}
      >
        <CardMedia
          component="img"
          image={hero.imgSrc}
          sx={{ height: 600, width: 1200 }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              paddingTop: "50px",
              color: "white",
              textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
            }}
          >
            {hero.title}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
            }}
          >
            {hero.description}
          </Typography>
        </Box>
      </Card>
    </>
  );
};
