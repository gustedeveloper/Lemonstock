import { FC, useState, useEffect } from "react";
import { AllCategorySectionsComponent } from "./allCategory-sections.component";
import { Section } from "../../../../core/model";
import { getPicturesFromPexels } from "../../../../core/api/pexels.api";

export const AllCategorySectionsContainer: FC = () => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const loadSections = async () => {
      try {
        const [cityImages, landscapeImages, natureImages, experimentalImages] =
          await Promise.all([
            getPicturesFromPexels("city"),
            getPicturesFromPexels("landscape"),
            getPicturesFromPexels("nature aesthetics"),
            getPicturesFromPexels("experimental shots"),
          ]);

        const sectionsData: Section[] = [
          {
            categoryTitle: "City vibes",
            images: cityImages,
          },
          {
            categoryTitle: "Beautiful landscapes",
            images: landscapeImages,
          },
          {
            categoryTitle: "Nature aesthetics",
            images: natureImages,
          },
          { categoryTitle: "Experimental shots", images: experimentalImages },
        ];

        setSections(sectionsData);
      } catch (error) {
        console.error("Error loading sections:", error);
      }
    };

    loadSections();
  }, []);

  return (
    <>
      <AllCategorySectionsComponent sections={sections} />
    </>
  );
};
