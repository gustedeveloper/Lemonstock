import { CardContent, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  price: number;
}

export const CartItemInfo: FC<Props> = (props) => {
  const { price } = props;

  return (
    <>
      <CardContent sx={{ p: "0px 20px" }}>
        <Typography
          color="primary.main"
          sx={{
            textAlign: {
              xs: "center",
              md: "start",
            },
          }}
        >
          {price.toFixed(2)} €
        </Typography>
      </CardContent>
    </>
  );
};
