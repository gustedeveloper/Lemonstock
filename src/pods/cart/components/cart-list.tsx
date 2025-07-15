import { Grid2 } from "@mui/material";
import { EmptyCartMessage } from "./empty-cart-message";
import { CartItem } from "./cart-item";
import { PhotoVM } from "../../../core/model";
import { FC } from "react";

interface Props {
  cartPictures: PhotoVM[];
  deleteFromCart: (id: string) => void;
}

export const CartList: FC<Props> = (props) => {
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
          <EmptyCartMessage />
        ) : (
          <>
            {cartPictures.map((picture) => (
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
};
