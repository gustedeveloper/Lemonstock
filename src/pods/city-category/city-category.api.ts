const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

export const getPictures = async () => {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=city&per_page=10`,
    {
      headers: {
        Authorization: apiKey,
      },
    }
  );

  const data = await response.json();
  console.log(data.photos);
  return data.photos;
};
