import { FC } from "react";
import { PictureInfo } from "../../core/model";
import { Grid2, Typography } from "@mui/material";
import React from "react";
import { CartItem } from "./components/cart-item";

interface Props {
  cartPictures: PictureInfo[];
  deleteFromCart: (id: string) => void;
  removeAll: () => void;
  totalCartBalance: number;
}

export const CartComponent: FC<Props> = React.memo((props) => {
  const { cartPictures, deleteFromCart } = props;

  return (
    <Grid2
      container
      sx={{
        display: "flex",
        width: {
          xs: "170px",
          sm: "300px",
          md: "415px",
        },
      }}
    >
      <Grid2
        size={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {cartPictures.length === 0 ? (
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
        ) : (
          <>
            {cartPictures.map((picture) => (
              /*<Grid2
                container
                key={picture.id}
                sx={{ justifyContent: "center" }}
              >
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
                      width: {
                        xs: "130px",
                        sm: "150px",
                      },
                    }}
                  >
                    <CartItemImage image={picture.picUrl} alt={picture.title} />
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
                    <CartItemInfo title={picture.title} price={picture.price} />

                    <CartItemActions
                      id={picture.id}
                      deleteFromCart={deleteFromCart}
                    />
                  </Box>
                </Grid2>
              </Grid2>*/
              <CartItem
                key={picture.id}
                picture={picture}
                deleteFromCart={deleteFromCart}
              />
            ))}
          </>
        )}
      </Grid2>
    </Grid2>
  );
});
