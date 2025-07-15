import * as api from "../../core/model";

export const mapPictureFromApiToVm = (
  picture: api.PhotoAPI,
  selectedPictures: string[]
): api.PhotoVM => ({
  id: picture.id.toString(),
  picUrl: picture.src.original,
  title: picture.alt,
  alt: picture.alt,
  price: 0,
  selected: selectedPictures.includes(picture.id.toString()),
});

export const mapPictureCollectionFromApiToVm = (
  pictureCollection: api.PhotoAPI[],
  selectedPictures: string[]
): api.PhotoVM[] =>
  pictureCollection.map((picture) =>
    mapPictureFromApiToVm(picture, selectedPictures)
  );
