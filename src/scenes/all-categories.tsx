import { FC } from "react";
import { AppLayout } from "../layout";
import { AllCategoriesContainer } from "../pods/all-categories";

export const AllCategoriesPage: FC = () => {
  return (
    <>
      <AppLayout>
        <AllCategoriesContainer />
      </AppLayout>
    </>
  );
};
