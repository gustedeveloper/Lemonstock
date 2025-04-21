import { Grid2, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  totalCartBalance: number;
}

export const CheckoutBalance: FC<Props> = (props) => {
  const { totalCartBalance } = props;
  return (
    <Grid2
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontWeight: "lighter", alignSelf: "center" }}>
        Balance
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "lighter",
          fontStyle: "oblique",
        }}
      >
        {totalCartBalance.toFixed(2)} €
      </Typography>
    </Grid2>
  );
};
