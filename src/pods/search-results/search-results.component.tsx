import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import { ImageCategoryContainer } from "../image-category";
import { getPicturesFromPexels } from "../../core/api/pexels.api";

interface Props {
  filter: string;
}

export const SearchResultsComponent: FC<Props> = (props) => {
  const { filter } = props;

  return (
    <Container>
      <Box sx={{ padding: "0px 0px 20px 30px" }}>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          Pictures of {filter}
        </Typography>
      </Box>
      <ImageCategoryContainer
        getPictures={(page, perPage) =>
          getPicturesFromPexels(filter, [], perPage, page)
        }
      />
    </Container>
  );
};
