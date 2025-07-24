import { PhotoAPI, PhotoVM } from "../model";
import { mapPictureCollectionFromApiToVm } from "./pexels.mapper";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1/search";
const CACHE_PREFIX = "pexels-cache-";

export const getPicturesFromPexels = async (
  query: string,
  selectedPictures: string[] = []
): Promise<PhotoVM[]> => {
  const cacheKey = `${CACHE_PREFIX}${query.toLowerCase()}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const parsed: PhotoAPI[] = JSON.parse(cached);
      return mapPictureCollectionFromApiToVm(parsed, selectedPictures, query);
    } catch (error) {
      console.warn("Error parsing cached data", error);
    }
  }

  const response = await fetch(`${BASE_URL}?query=${query}&per_page=12`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Pexels data");
  }

  const data = await response.json();
  const photos: PhotoAPI[] = data.photos;

  localStorage.setItem(cacheKey, JSON.stringify(photos));
  return mapPictureCollectionFromApiToVm(photos, selectedPictures, query);
};
