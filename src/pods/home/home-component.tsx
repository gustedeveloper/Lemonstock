import { Container } from "@mui/material";
import { FC } from "react";
import {
  Hero,
  Filters,
  SearchBar,
  AllCategorySectionsContainer,
} from "./components";

export const HomeComponent: FC = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          maxWidth: "1200px",
          paddingTop: "100px",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Hero />
        <SearchBar />
        <Filters />
        <AllCategorySectionsContainer />
      </Container>
    </>
  );
};
