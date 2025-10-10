import { Box, Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const filterCategories: string[] = [
  "travel",
  "urban",
  "street art",
  "cozy",
  "nightscapes",
  "future",
  "wild life",
  "sea life",
  "architecture",
];

export const Filters: FC = () => {
  const navigate = useNavigate();

  const handleOnClick = (category: string) => {
    navigate(`/search?q=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: "20px" }}>
        {filterCategories.map((category, index) => (
          <Button
            onClick={() => handleOnClick(category)}
            key={index}
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              font: "inherit",
              color: "secondary.main",
              borderRadius: "20px",
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
    </>
  );
};
