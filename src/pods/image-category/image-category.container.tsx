import { FC, useContext, useEffect } from "react";
import { PictureInfo, PictureInfoVm } from "../../core/model";
import { ImageCategoryComponent } from "./image-category.component";
import { PicturesContext } from "../../core/context/pictures-context";

interface Props {
  getPictures: () => Promise<PictureInfo[]>;
  mapPictureCollectionFromApiToVm: (
    apiPictures: PictureInfo[],
    selectedPictures: string[]
  ) => PictureInfoVm[];
}

export const ImageCategoryContainer: FC<Props> = (props) => {
  const { getPictures, mapPictureCollectionFromApiToVm } = props;

  const { pictures, setPictures, selectedPictures, setSelectedPictures } =
    useContext(PicturesContext);

  const handleCheckBox = (id: string) => {
    const selection = pictures.find((picture) => picture.id === id);

    if (selection) {
      selection.selected = !selection.selected;
      const updatedPictures = pictures.map((picture) =>
        picture.id === selection.id
          ? {
              ...picture,
              selected: selection?.selected,
            }
          : picture
      );
      setPictures(updatedPictures);
      addDeleteFromCheckBox(selection, id);
    }
  };

  const addDeleteFromCheckBox = (selection: PictureInfoVm, id: string) => {
    const updateWithDeletedPicture = selectedPictures.filter(
      (picture) => picture !== selection.id
    );

    if (selection.selected === true)
      setSelectedPictures([...selectedPictures, id]);
    else {
      setSelectedPictures(updateWithDeletedPicture);
    }
  };

  useEffect(() => {
    getPictures().then((apiPictures) => {
      const mappedPictures = mapPictureCollectionFromApiToVm(
        apiPictures,
        selectedPictures
      );
      setPictures(mappedPictures);
    });
  }, [selectedPictures, setPictures]);

  return (
    <ImageCategoryComponent
      pictures={pictures}
      handleCheckBox={handleCheckBox}
    />
  );
};
