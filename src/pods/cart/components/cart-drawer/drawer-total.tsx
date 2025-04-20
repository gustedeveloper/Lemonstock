import { Grid2, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  totalCartBalance: number;
}

export const DrawerTotal: FC<Props> = (props) => {
  const { totalCartBalance } = props;
  return (
    <>
      <Grid2 sx={{ textAlign: "center" }}>
        <Typography variant="h6" color="primary.main">
          Total: {totalCartBalance.toFixed(2)} €
        </Typography>
      </Grid2>
    </>
  );
};
