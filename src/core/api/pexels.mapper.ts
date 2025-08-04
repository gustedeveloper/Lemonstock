import { getPhotoPrice } from "../../common/helpers/photo-price-generator";
import * as api from "../../core/model";

export const mapPictureFromApiToVm = (
  picture: api.PhotoAPI,
  selectedPictures: string[],
  category: string
): api.PhotoVM => ({
  id: picture.id.toString(),
  picUrl: {
    original: picture.src.original,
    large: picture.src.large,
    medium: picture.src.medium,
    small: picture.src.small,
  },
  title: picture.alt,
  alt: picture.alt,
  price: getPhotoPrice(category),
  selected: selectedPictures.includes(picture.id.toString()),
});

export const mapPictureCollectionFromApiToVm = (
  pictureCollection: api.PhotoAPI[],
  selectedPictures: string[],
  category: string
): api.PhotoVM[] =>
  pictureCollection.map((picture) =>
    mapPictureFromApiToVm(picture, selectedPictures, category)
  );
