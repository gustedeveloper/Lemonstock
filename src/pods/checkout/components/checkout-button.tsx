import { Button, Grid2 } from "@mui/material";
import { FC } from "react";

export const CheckoutButton: FC = () => {
  return (
    <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
      <Button size="large" variant="contained">
        Checkout
      </Button>
    </Grid2>
  );
};
