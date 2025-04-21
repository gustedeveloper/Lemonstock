import { Grid2 } from "@mui/material";
import { FC } from "react";
import { CheckoutBalance, CheckoutButton, CheckoutTitle } from "./components";

interface Props {
  totalCartBalance: number;
}

export const CheckoutComponent: FC<Props> = (props) => {
  const { totalCartBalance } = props;

  return (
    <Grid2
      container
      sx={{
        p: {
          xs: "20px",
          md: "50px",
        },
        width: {
          xs: "200px",
          md: "415px",
        },
        height: "250px",
        bgcolor: "secondary.light",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CheckoutTitle />

      <CheckoutBalance totalCartBalance={totalCartBalance} />

      <CheckoutButton />
    </Grid2>
  );
};
