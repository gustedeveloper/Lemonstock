import { FC } from "react";
import { AppLayout } from "../layout";
import { CartInsideDrawer } from "../pods/cart/cart-drawer";
import { SearchResultsContainer } from "../pods/search-results";

export const SearchResultsPage: FC = () => {
  return (
    <>
      <AppLayout>
        <SearchResultsContainer />
        <CartInsideDrawer />
      </AppLayout>
    </>
  );
};
