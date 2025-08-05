import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Category } from "../../../core/model";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  category: Category;
}

export const CategoryComponent: FC<Props> = (props) => {
  const { category } = props;

  const navigate = useNavigate();

  const normalizeForUrl = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Card
        onClick={() => navigate(`/category/${normalizeForUrl(category.name)}`)}
        sx={{
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          transition: "opacity 0.7s, scale 0.2s ease-in-out",
          "&:hover": {
            opacity: 0.9,
            scale: 1.1,
          },
        }}
      >
        <CardMedia
          component="img"
          image={category.imageUrl}
          sx={{ height: 200, width: 300 }}
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
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "secondary.main",
              textShadow: "0px 5px 5px rgba(0, 0, 0, 2)",
            }}
          >
            {category.name}
          </Typography>
        </Box>
      </Card>
    </>
  );
};
