import { Container } from "@mui/material";
import { FC } from "react";
import { categoryData } from "../../core/model";
import { CategoryContainer } from "./components/category";

export const AllCategoriesComponent: FC = () => {
  return (
    <>
      <Container
        sx={{
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {categoryData.map((category, index) => (
          <CategoryContainer category={category} key={index} />
        ))}
      </Container>
    </>
  );
};
