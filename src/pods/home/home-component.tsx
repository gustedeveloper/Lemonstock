import { Container } from "@mui/material";
import { FC } from "react";
import { Hero } from "./components/hero";
import { SearchBar } from "./components/search-bar";
import { Filters } from "./components/filters";

export const HomeComponent: FC = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          maxWidth: "1200px",
          paddingTop: "100px",
          height: "100vw",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Hero />
        <SearchBar />
        <Filters />
      </Container>
    </>
  );
};
