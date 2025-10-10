import { Container } from "@mui/material";
import { FC } from "react";
import {
  Hero,
  Filters,
  SearchBarContainer,
  AllCategorySectionsContainer,
} from "./components";

export const HomeComponent: FC = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          maxWidth: "1200px",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Hero />
        <SearchBarContainer />
        <Filters />
        <AllCategorySectionsContainer />
      </Container>
    </>
  );
};
