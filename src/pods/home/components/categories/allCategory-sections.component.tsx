import { FC } from "react";
import { Section } from "../../../../core/model";
import { CategorySectionContainer } from "./category";
import { Box } from "@mui/material";

interface Props {
  sections: Section[];
}

export const AllCategorySectionsComponent: FC<Props> = (props) => {
  const { sections } = props;

  return (
    <Box sx={{ pb: "50px" }}>
      {sections.map((section, index) => (
        <CategorySectionContainer
          key={`${section.categoryTitle}-${index}`}
          categoryTitle={section.categoryTitle}
          images={section.images}
        />
      ))}
    </Box>
  );
};
