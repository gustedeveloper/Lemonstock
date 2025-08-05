import { FC } from "react";
import { HomeContainer } from "../pods/home";
import { AppLayout } from "../layout";
import { CartInsideDrawer } from "../pods/cart/cart-drawer";

export const HomePage: FC = () => {
  return (
    <>
      <AppLayout>
        <HomeContainer />
        <CartInsideDrawer />
      </AppLayout>
    </>
  );
};
