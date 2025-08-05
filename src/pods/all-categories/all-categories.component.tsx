import { Container } from "@mui/material";
import { FC } from "react";
import { categoryData } from "../../core/model";
import { CategoryComponent } from "./components/category";

export const CategoriesCatalogComponent: FC = () => {
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
          <CategoryComponent category={category} key={index} />
        ))}
      </Container>
    </>
  );
};
