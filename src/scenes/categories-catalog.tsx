import { FC } from "react";
import { AppLayout } from "../layout";
import { CategoriesCatalogContainer } from "../pods/all-categories";

export const CategoriesCatalogPage: FC = () => {
  return (
    <>
      <AppLayout>
        <CategoriesCatalogContainer />
      </AppLayout>
    </>
  );
};
