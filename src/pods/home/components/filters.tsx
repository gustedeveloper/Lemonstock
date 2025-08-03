import { Box, Button } from "@mui/material";
import { FC } from "react";

const filterCategories: string[] = [
  "Nature",
  "Urban",
  "Sport",
  "Food",
  "Love",
  "Culture",
  "Wild life",
  "Sea life",
  "Fashion",
  "Travel",
];

export const Filters: FC = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "20px" }}>
        {filterCategories.map((category) => (
          <Button
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
