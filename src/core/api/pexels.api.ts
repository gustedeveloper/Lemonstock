import { PhotoAPI, PhotoVM } from "../model";
import { mapPictureCollectionFromApiToVm } from "./pexels.mapper";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const CACHE_PREFIX = "pexels-cache-";

export const getPicturesFromPexels = async (
  query: string,
  selectedPictures: string[] = [],
  photosPerPage = 20,
  page = 1
): Promise<PhotoVM[]> => {
  const cacheKey = `${CACHE_PREFIX}${query.toLowerCase()}-${photosPerPage}-p${page}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const parsed: PhotoAPI[] = JSON.parse(cached);
      return mapPictureCollectionFromApiToVm(parsed, selectedPictures, query);
    } catch (error) {
      console.warn("Error parsing cached data", error);
    }
  }

  const response = await fetch(
    `${BASE_URL}/api/pexels?query=${encodeURIComponent(
      query
    )}&photosPerPage=${photosPerPage}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pexels data");
  }

  const data = await response.json();
  const photos: PhotoAPI[] = data.photos;

  localStorage.setItem(cacheKey, JSON.stringify(photos));
  return mapPictureCollectionFromApiToVm(photos, selectedPictures, query);
};
