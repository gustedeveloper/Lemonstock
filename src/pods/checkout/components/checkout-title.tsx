import { Grid2, Typography } from "@mui/material";
import { FC } from "react";

export const CheckoutTitle: FC = () => {
  return (
    <Grid2>
      <Typography
        variant="h3"
        sx={{ fontWeight: "lighter", color: "primary.main" }}
      >
        Summary
      </Typography>
    </Grid2>
  );
};
