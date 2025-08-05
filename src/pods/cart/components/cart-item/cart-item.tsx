import { Box, Card, Grid2 } from "@mui/material";
import { CartItemImage } from "./cart-item-image";
import { CartItemInfo } from "./cart-item-info";
import { CartItemActions } from "./cart-item-actions";
import { FC } from "react";
import { PhotoVM } from "../../../../core/model";

interface Props {
  picture: PhotoVM;
  deleteFromCart: (id: string) => void;
}

export const CartItem: FC<Props> = (props) => {
  const { picture, deleteFromCart } = props;
  return (
    <>
      <Grid2 container key={picture.id} sx={{ justifyContent: "center" }}>
        <Grid2
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Card
            sx={{
              objectFit: "contain",
              width: {
                xs: "130px",
                sm: "150px",
              },
            }}
          >
            <CartItemImage image={picture.picUrl.medium} alt={picture.title} />
          </Card>
          <Box
            sx={{
              width: {
                xs: "130px",
                sm: "150px",
              },
              display: "flex",
              justifyContent: "space-between",

              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: "center",
            }}
          >
            <CartItemInfo price={picture.price} />

            <CartItemActions id={picture.id} deleteFromCart={deleteFromCart} />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};
