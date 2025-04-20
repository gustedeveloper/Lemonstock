import { FC, useContext } from "react";
import { Drawer, Grid2 } from "@mui/material";
import { PicturesContext } from "../../core/context/pictures-context";
import { CartContainer } from "../cart";
import { useNavigate } from "react-router-dom";
import { DrawerHeader } from "./components/cart-drawer/drawer-header";
import { DrawerActions } from "./components/cart-drawer/drawer-actions";
import { DrawerTotal } from "./components/cart-drawer/drawer-total";

export const CartInsideDrawer: FC = () => {
  const {
    drawer,
    handleDrawerClose,
    totalCartBalance,
    removeAll,
    selectedPictures,
  } = useContext(PicturesContext);

  const navigate = useNavigate();

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={drawer}
      onClose={handleDrawerClose}
    >
      <DrawerHeader handleDrawerClose={handleDrawerClose} />
      <CartContainer />

      {selectedPictures.length !== 0 ? (
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "20px",
          }}
        >
          <Grid2
            container
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <DrawerTotal totalCartBalance={totalCartBalance} />
            <DrawerActions removeAll={removeAll} navigate={navigate} />
          </Grid2>
        </Grid2>
      ) : (
        <></>
      )}
    </Drawer>
  );
};
