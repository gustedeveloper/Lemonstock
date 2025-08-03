import { Container } from "@mui/material";
import { FC } from "react";
import { Hero } from "./components/hero";

export const HomeComponent: FC = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          maxWidth: "1200px",
          paddingTop: "100px",
          height: "100vw",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <Hero />
      </Container>
    </>
  );
};
