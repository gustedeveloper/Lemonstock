import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CardActions } from "@mui/material";
import { FC } from "react";

interface Props {
  id: string;
  deleteFromCart: (id: string) => void;
}

export const CartItemActions: FC<Props> = (props) => {
  const { deleteFromCart, id } = props;
  return (
    <>
      <CardActions
        sx={{
          p: {
            xs: "0px",
          },
        }}
      >
        <DeleteForeverIcon
          color="primary"
          onClick={() => deleteFromCart(id)}
          sx={{
            cursor: "pointer",
          }}
        ></DeleteForeverIcon>
      </CardActions>
    </>
  );
};
