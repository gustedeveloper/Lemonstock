import { FC } from "react";
import { AppLayout } from "../layout";
import { CategoriesCatalogContainer } from "../pods/all-categories";
import { CartInsideDrawer } from "../pods/cart/cart-drawer";

export const CategoriesCatalogPage: FC = () => {
  return (
    <>
      <AppLayout>
        <CategoriesCatalogContainer />
        <CartInsideDrawer />
      </AppLayout>
    </>
  );
};
