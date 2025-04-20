import { CardContent, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  title: string;
  price: number;
}

export const CartItemInfo: FC<Props> = (props) => {
  const { title, price } = props;

  return (
    <>
      <CardContent sx={{ p: "5px 15px" }}>
        <Typography sx={{ fontSize: "12px" }}>{title}</Typography>
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
