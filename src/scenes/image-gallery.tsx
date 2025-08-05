import { FC } from "react";
import { CategoryContainer } from "../pods/category";
import { AppLayout } from "../layout";
import { CartInsideDrawer } from "../pods/cart/cart-drawer";

export const ImageGalleryPage: FC = () => {
  return (
    <>
      <AppLayout>
        <CategoryContainer />
        <CartInsideDrawer />
      </AppLayout>
    </>
  );
};
