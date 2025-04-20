import { Typography } from "@mui/material";
import { FC } from "react";

export const EmptyCartMessage: FC = () => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        fontSize: "14px",
        p: "20px",
        color: "gray",
      }}
    >
      Your shopping cart is empty 🛒
    </Typography>
  );
};
